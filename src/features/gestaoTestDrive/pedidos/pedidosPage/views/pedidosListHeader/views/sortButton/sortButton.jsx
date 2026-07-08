import React from 'react';
import PropTypes from 'prop-types';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import ButtonIcon from 'common/controls/buttonIcon';
import colors from 'assets/styles/colors';
import { makeStyles } from '@material-ui/styles';

const styleForIcon = {
  fontSize: '12px',
  color: colors.secundary_color_800,
  marginRight: '8px',
};

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: 4,
    padding: 6,
    marginLeft: -6,
    '&:hover': {
      backgroundColor: colors.secundary_color_100_40,
    },
    '&:active': {
      backgroundColor: colors.secundary_color_100_56,
    },
  },
}));

const SortButton = ({ isAscSort, setSorting }) => {
  const classes = useStyles();
  let changeSort = isAscSort;

  return (
    <ButtonIcon
      className={classes.button}
      onClick={() => {
        changeSort = !isAscSort;
        setSorting(changeSort);
      }}
    >
      {changeSort
        ? (<ArrowUpwardIcon style={styleForIcon} />)
        : (<ArrowDownwardIcon style={styleForIcon} />)}
      DATA
    </ButtonIcon>
  );
};

SortButton.propTypes = {
  setSorting: PropTypes.func,
  isAscSort: PropTypes.bool,
};

SortButton.defaultProps = {
  setSorting: () => {},
  isAscSort: false,
};

export default SortButton;
