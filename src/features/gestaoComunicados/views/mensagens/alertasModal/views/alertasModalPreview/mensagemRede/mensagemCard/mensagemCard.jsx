import React from 'react';
import PropTypes from 'prop-types';
import Warning from 'assets/icons/warning-color';
import parse from 'html-react-parser';
import MensagemCardIcon from './mensagemCardIcon';

import './mensagemCard.scss';

const MensagemCard = ({
  card, signedUrl,
}) => (
  <div className="mensagem-rede__card__content">
    <div className="mensagem-rede__card__content_icon">
      {card?.urlImagem != null && signedUrl
        ? (<MensagemCardIcon signedUrl={signedUrl} />)
        : <Warning width={42} height={42} />}
    </div>
    <div className="mensagem-rede__card__content_title">
      {card?.titulo}
    </div>
    <div className="mensagem-rede__card__content_content">
      {parse(card?.mensagem ?? '')}
    </div>
  </div>

);

MensagemCard.propTypes = {
  card: PropTypes.object,
  signedUrl: PropTypes.string,
};

MensagemCard.defaultProps = {
  card: null,
  signedUrl: null,
};

export default MensagemCard;
