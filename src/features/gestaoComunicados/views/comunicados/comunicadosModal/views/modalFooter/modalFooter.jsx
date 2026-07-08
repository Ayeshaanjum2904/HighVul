import React from 'react';
import PropTypes from 'prop-types';
import BotaoProximo from './views/botaoProximo';
import BotaoVoltar from './views/botaoVoltar';
import BotaoPublicar from './views/botaoPublicar';

import { ModalComunicados } from '../../../../../redux/enums';

import './modalFooter.scss';

const ModalFooter = ({ templateModal }) => (
  <div
    className="comunicados__modal-footer__container"
    data-cy="comunicados-footer"
  >
    {templateModal === ModalComunicados.edicaoComunicados
      ? (<BotaoProximo />)
      : (
        <>
          <BotaoVoltar />
          <BotaoPublicar />
        </>
      )}
  </div>
);

ModalFooter.propTypes = {
  templateModal: PropTypes.string,
};

ModalFooter.defaultProps = {
  templateModal: ModalComunicados.edicaoComunicados,
};

export default ModalFooter;
