export const cardDonutStyles = {
  container: (isHorizontal) => {
    if (isHorizontal) {
      return {
        gridTemplateAreas:
          "'  donut    .   '"
          + "'donut  title '"
          + "'donut    .   '"
          + "'donut  legend'"
          + "'donut    .   '",
        gridTemplateColumns: '210px  1fr',
        gridTemplateRows: '36px 36px 15px 1fr 20px',
        paddingRight: '10px',
      };
    }
    return {
      gridTemplateAreas:
        "'  title '"
        + "'donut '"
        + "'legend'",
      gridTemplateColumns: '100%',
      gridTemplateRows: '36px 1fr 100px',
      rowGap: '10px',
    };
  },
  donut: {
    paddingRight: (isHorizontal) => (isHorizontal ? '0px' : '19px'),
    marginLeft: (isHorizontal) => (isHorizontal ? '-25px' : '0px'),
  },
  outer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f9fc',
    borderRadius: '4px',
    padding: '19px 0px 22px 19px',
    position: 'relative',
  },
};
