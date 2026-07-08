import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Scrollbar from 'react-custom-scrollbars';

import './corpoEmail.scss';

const CorpoEmail = ({
  corpoEmail,
}) => (
  <div className="historico__corpo-email">
    <div className="historico__corpo-email__label">
      Texto do e-mail
    </div>
    <Scrollbar
      autoHeight
      autoHeightMax="100%"
      autoHeightMin="100%"
      width="1000px"
    >
      <div className="historico__corpo-email__content">
        {corpoEmail ? parse(corpoEmail) : null}
      </div>
    </Scrollbar>
  </div>
);

CorpoEmail.propTypes = {
  corpoEmail: PropTypes.string,
};

CorpoEmail.defaultProps = {
  corpoEmail: '',
};

export default CorpoEmail;
