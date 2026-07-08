export const compareFilters = (local, context) => ({
  diff: local.some((value, i) => value !== context[i]),
});
