import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Scrollbars from 'react-custom-scrollbars';

import ListItem from './listItem/index';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateAreas:
      "'input'"
    + "'list '",
    gridTemplateColumns: 'auto',
    gridTemplateRows: '64px 1fr',
    rowGap: '10px',
  },
  input: {
    gridArea: 'input',
    marginRight: '12px',
  },
  list: {
    gridArea: 'list',
    marginLeft: '-8px',
  },
});

const ListWithInput = ({
  items, children, deleteItem, validate, errors, disableAction, type,
}) => {
  const classes = useStyles();

  const renderList = () => (
    <Scrollbars
      renderView={({ style }) => <div style={{ ...style, marginBottom: '0px !important' }} />}
      autoHeight
      autoHeightMin="0px"
      autoHeightMax="180px"
    >
      {(Array.isArray(items) ? items : []).map((item, i) => (
        <ListItem
          item={{ ...item, index: i }}
          onClick={deleteItem}
          validate={validate}
          error={errors.find((value) => value.index === i)?.message}
          disabled={disableAction}
          type={type}
          key={i}
        />
      ))}
    </Scrollbars>
  );

  return (
    <div className={classes.container}>
      <div className={classes.input}>
        {children}
      </div>
      <div className={classes.list}>
        {renderList()}
      </div>
    </div>
  );
};

ListWithInput.propTypes = {
  items: PropTypes.array,
  children: PropTypes.node,
  deleteItem: PropTypes.func,
  validate: PropTypes.func,
  errors: PropTypes.array,
  disableAction: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

ListWithInput.defaultProps = {
  items: null,
  children: null,
  deleteItem: () => {},
  validate: () => {},
  errors: [],
  disableAction: false,
};

export default ListWithInput;
