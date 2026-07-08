import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from './snackbar';

import './snackbarList.scss';

const SnackbarList = ({ onClose, snackbarErrors }) => (
  <div className="snackbar__itens-container">
    {(snackbarErrors || []).map((erro) => (
      <Snackbar
        message={erro ? erro.message : ''}
        id={erro ? erro.id : null}
        type={erro ? erro.type : ''}
        onClose={onClose}
        key={erro ? erro.id : null}
        time={7000}
      />
    ))}
  </div>
);
SnackbarList.propTypes = {
  onClose: PropTypes.func,
  snackbarErrors: PropTypes.array,
};

SnackbarList.defaultProps = {
  onClose: () => { },
  snackbarErrors: [],
};

export default SnackbarList;
