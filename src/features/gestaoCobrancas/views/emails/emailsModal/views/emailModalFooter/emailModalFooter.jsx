import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { makeButtonMap } from './buttons/makeButtonMap';

import FooterError from './footerError';

import './emailModalFooter.scss';

const getButtons = (buttonMap, currentStatus) => {
  if (!_.isArray(buttonMap)) return null;
  return buttonMap.find((m) => m.status === currentStatus);
};

const EmailModalFooter = ({
  isError, status,
}) => {
  const buttonMap = makeButtonMap();
  const buttons = getButtons(buttonMap, status);

  return (
    <div className="email__modal-footer__container">
      <div className="email__modal-footer__error">
        {(isError) ? (<FooterError />) : null}
      </div>
      <div className="email__modal-footer__button1">
        {buttons?.button1}
      </div>
      <div className="email__modal-footer__button2">
        {buttons?.button2}
      </div>
    </div>
  );
};

EmailModalFooter.propTypes = {
  isError: PropTypes.bool,
  status: PropTypes.string,
};

EmailModalFooter.defaultProps = {
  isError: false,
  status: null,
};

export default EmailModalFooter;
