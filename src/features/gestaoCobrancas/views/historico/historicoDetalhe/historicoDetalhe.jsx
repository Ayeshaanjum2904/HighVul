import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import List, { ListContent } from 'common/layout/list';
import AssuntoInput from './views/assuntoInput';
import DataEnvioInput from './views/dataEnvioInput';
import Destinatarios from './views/destinatarios';
import CorpoEmail from './views/corpoEmail';
import Duplicatas from './views/duplicatas';

import './historicoDetalhe.scss';

const HistoricoDetalhe = ({
  onCloseModal, getDetails, isLoading, isError, resetStore,
}) => {
  useEffect(() => {
    getDetails();
    return () => {
      resetStore();
    };
  }, [getDetails, resetStore]);

  return (
    <Modal
      disableCloseButton={false}
      closeModal={onCloseModal}
      height="500px"
      width="1000px"
    >
      <div className="historico__modal-detalhes__container">
        <div className="historico__modal-detalhes__header">
          <div className="historico__modal-detalhes__header_title">
            E-mail enviado
          </div>
        </div>
        <div className="historico__modal-detalhes__content">
          <List
            isLoading={isLoading}
            isError={isError}
          >
            <ListContent>
              <div className="historico__modal-detalhes__content_assunto">
                <AssuntoInput />
              </div>
              <div className="historico__modal-detalhes__content_data">
                <DataEnvioInput />
              </div>
              <div className="historico__modal-detalhes__content_destinatarios">
                <Destinatarios />
              </div>
              <div className="historico__modal-detalhes__content_corpo-email">
                <CorpoEmail />
              </div>
              <div className="historico__modal-detalhes__content_duplicatas">
                <Duplicatas />
              </div>
            </ListContent>
          </List>
        </div>
      </div>
    </Modal>

  );
};

HistoricoDetalhe.propTypes = {
  onCloseModal: PropTypes.func,
  getDetails: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  resetStore: PropTypes.func,
};

HistoricoDetalhe.defaultProps = {
  onCloseModal: () => {},
  getDetails: () => {},
  isLoading: () => {},
  isError: () => {},
  resetStore: () => {},
};

export default HistoricoDetalhe;
