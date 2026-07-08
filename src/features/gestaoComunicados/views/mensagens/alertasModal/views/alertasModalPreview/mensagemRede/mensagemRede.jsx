import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import CloseModal from 'common/layout/modal/closeModalButton';
import Slider from 'react-slick';
import MensagemCard from './mensagemCard';

import './mensagemRede.scss';

const useStyles = makeStyles({
  slider: {
    '& .slick-prev': {
      left: '-40px',
    },
    '& .slick-next': {
      right: '-35px',
    },
    '&.slick-slider': {
      padding: '0px 56px 0px 32px',
      minHeight: '290px',
    },
  },
});

const MensagemRede = ({ closeModal, mensagens }) => {
  const classes = useStyles();
  return (
    <div className="mensagem-rede__modal__container">
      <div className="mensagem-rede__modal__container__header" />
      <div className="mensagem-rede__modal__container__close">
        <CloseModal onClick={closeModal} disabled />
      </div>
      <div className="mensagem-rede__modal__container__content">
        <Scrollbars>
          <Slider
            dots
            infinite={false}
            speed="500"
            slidesToShow={1}
            slidesToScroll={1}
            className={classes.slider}
          >
            {(mensagens || []).map((m, i) => (
              <MensagemCard
                card={m}
                key={i}
              />
            ))}
          </Slider>
        </Scrollbars>
      </div>
    </div>
  );
};

MensagemRede.propTypes = {
  closeModal: PropTypes.func,
  mensagens: PropTypes.array,
};

MensagemRede.defaultProps = {
  closeModal: () => {},
  mensagens: null,
};

export default MensagemRede;
