import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { ChevronRight, ChevronLeft } from 'react-feather';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  value: {
    width: '38px',
    height: '38px',
    padding: '12px 0',

    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'center',
    color: colors.secundary_color_700,
    cursor: 'default',
  },

  arrowLeftContainer: {
    padding: '10px 10px 5px 10px',
    borderRight: 'solid 1px #e4e9f2',
  },

  arrowLeft: (props) => ({
    width: '18px',
    height: '18px',
    color: props.arrowLeftDisabled ? '#C5CEE0' : colors.secundary_color_400,
    cursor: props.arrowLeftDisabled ? 'default' : 'pointer',
  }),

  arrowRightContainer: {
    padding: '10px 10px 5px 10px',
    borderLeft: 'solid 1px #e4e9f2',
  },

  arrowRight: (props) => ({
    width: '18px',
    height: '18px',
    color: props.arrowRightDisabled ? '#C5CEE0' : colors.secundary_color_400,
    cursor: props.arrowRightDisabled ? 'default' : 'pointer',
  }),
});

const PageSelector = ({
  page, setPage, disabled, lastPage,
}) => {
  const arrowLeftDisabled = (page === 0 || disabled);
  const arrowRightDisabled = (lastPage <= page || disabled);
  const classes = useStyles({ arrowLeftDisabled, arrowRightDisabled });

  return (
    <>
      <div
        data-cy="select-page-left"
        className={classes.arrowLeftContainer}
      >
        <ChevronLeft
          className={classes.arrowLeft}
          onClick={() => (arrowLeftDisabled ? null : setPage(page - 1))}
        />
      </div>

      <div className={classes.value}>
        {page + 1}
      </div>

      <div
        data-cy="select-page-right"
        className={classes.arrowRightContainer}
      >
        <ChevronRight
          className={classes.arrowRight}
          onClick={() => (arrowRightDisabled ? null : setPage(page + 1))}
        />
      </div>
    </>
  );
};

PageSelector.propTypes = {
  page: PropTypes.number,
  lastPage: PropTypes.number,
  disabled: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
};

PageSelector.defaultProps = {
  page: 0,
  lastPage: 0,
  disabled: false,
};

export default PageSelector;
