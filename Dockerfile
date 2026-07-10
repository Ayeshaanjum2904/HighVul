### build environment
FROM public.ecr.aws/docker/library/node:14.16 as builder

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy lockfiles first to leverage Docker layer cache
COPY package.json package-lock.json ./
# Skip Cypress binary download (testes E2E pausados) - economiza ~300MB e tempo de install
ENV CYPRESS_INSTALL_BINARY=0
RUN npm install --legacy-peer-deps

COPY . /usr/src/app
ENV DISABLE_ESLINT_PLUGIN=true
RUN npm run-script build

### production environment
FROM nginx:stable-alpine

# Create and switch to a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
ARG CONFIG_ENV
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

# Add a healthcheck instruction
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD wget -q --spider http://localhost:80 || exit 1

ENTRYPOINT mv /usr/share/nginx/html/config/config-$CONFIG_ENV.js /usr/share/nginx/html/config/config.js && nginx -g 'daemon off;'
