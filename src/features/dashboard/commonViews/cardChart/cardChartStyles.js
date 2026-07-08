export const cardChartStyles = {
  outer: {
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    padding: ({ isHorizontal }) => {
      if (isHorizontal) return '16px 16px 30px 16px';
      return '16px 16px 18px 16px';
    },
    background: ({ backgroundColor }) => backgroundColor,
  },
  container: ({ isHorizontal }) => {
    if (isHorizontal) {
      return {
        gridTemplateAreas:
          "'  header     header '"
          + "'chart   detail '",
        gridTemplateColumns: '1fr auto',
        gridTemplateRows: '50px 1fr',
        columnGap: '8px',
      };
    }
    return {
      gridTemplateAreas:
        "'  header   '"
        + "'chart '"
        + "'detail   '",
      gridTemplateColumns: 'auto',
      gridTemplateRows: '50px 1fr 140px',
      rowGap: '10px',
    };
  },
  header: ({ isHorizontal }) => {
    if (isHorizontal) return { gridTemplateColumns: 'auto 1fr 238px' };
    return { gridTemplateColumns: 'auto 1fr auto' };
  },
};
