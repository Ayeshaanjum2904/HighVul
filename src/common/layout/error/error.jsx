import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { XCircle } from 'react-feather';
import colors from 'assets/styles/colors';

import './error.scss';

const Error = ({ mensagem, subMensagem }) => (
  <div className="error-component">
    <div className="error-component__icon">
      <XCircle size={40} stroke={colors.error_color_300} />
    </div>
    <div className="error-component__mensagem">
      {mensagem}
    </div>
    {!_.isEmpty(subMensagem) && !_.isNull(subMensagem) && !_.isUndefined(subMensagem)
      ? (<div className="error-component__submensagem">{subMensagem}</div>)
      : null}
  </div>
);

Error.propTypes = {
  mensagem: PropTypes.string.isRequired,
  subMensagem: PropTypes.string,
};

Error.defaultProps = {
  subMensagem: null,
};

export default Error;
