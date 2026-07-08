import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import MaterialTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'inherit',
    '& .MuiTab-root': {
      textTransform: 'none',
      padding: '0px 12px',
      minWidth: 'auto',
      color: colors.secundary_color_700,
      fontSize: '14px',
      fontWeight: 100,
      minHeight: '40px',
      borderBottom: 'solid 2px #EDF1F7',

    },
    '& .MuiTabs-indicator': {
      backgroundColor: colors.primary_color_600,
    },
    '& .Mui-selected': {
      color: colors.primary_color_600,
      fontWeight: 'bold',
    },
    '& .MuiTabs-root': {
      minHeight: '40px',
    },
  },
});

const Tabs = ({ labels, onChange, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MaterialTabs
        value={value}
        onChange={onChange}
        variant="scrollable"
      >
        {(labels || []).map((l, i) => (
          <Tab
            label={l.text}
            value={l.value}
            key={i}
            disableRipple

          />
        ))}
      </MaterialTabs>
    </div>
  );
};

Tabs.propTypes = {
  labels: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Tabs.defaultProps = {
  labels: null,
};

export default Tabs;
