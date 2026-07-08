import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { makeButtonMap } from './buttons/makeButtonMap';

import FooterError from './footerError';

import './alertasModalFooter.scss';

const getButtons = (buttonMap, currentStatus) => {
  if (!_.isArray(buttonMap)) return null;
  return buttonMap.find((m) => m.status === currentStatus);
};

const AlertasModalFooter = ({
  isError, status, isLoading,
}) => {
  const buttonMap = makeButtonMap();
  const buttons = getButtons(buttonMap, status);

  return (
    !isLoading
      ? (
        <div className="alertas__modal-footer__container">
          <div className="alertas__modal-footer__error">
            {(isError) ? (<FooterError />) : null}
          </div>
          <div
            className="alertas__modal-footer__button1"
            data-cy="alertas-footer-button1"
          >
            {buttons?.button1}
          </div>
          <div
            className="alertas__modal-footer__button2"
            data-cy="alertas-footer-button2"
          >
            {buttons?.button2}
          </div>
        </div>
      ) : null
  );
};

AlertasModalFooter.propTypes = {
  isError: PropTypes.bool,
  status: PropTypes.string,
  isLoading: PropTypes.bool,
};

AlertasModalFooter.defaultProps = {
  isError: false,
  status: null,
  isLoading: false,
};

export default AlertasModalFooter;
