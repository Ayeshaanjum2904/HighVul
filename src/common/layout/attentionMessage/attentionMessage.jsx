import React from 'react';
import PropTypes from 'prop-types';

import WarningSvg from '../../../assets/icons/warning-color';

import './attentionMessage.scss';

const AttentionMessage = ({ mensagem }) => (
  <div className="atencao-mensagem__container">
    <div className="atencao-mensagem__container__icon">
      <WarningSvg
        width="24px"
        height="24px"
        color="#BF8900"
      />
    </div>
    <div className="atencao-mensagem__container__mensagem">
      {mensagem}
    </div>
  </div>
);

AttentionMessage.propTypes = {
  mensagem: PropTypes.string.isRequired,
};

export default AttentionMessage;
