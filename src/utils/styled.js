export const withTransientProps = {
  shouldForwardProp: (propName) => !propName.startsWith('$'),
};
