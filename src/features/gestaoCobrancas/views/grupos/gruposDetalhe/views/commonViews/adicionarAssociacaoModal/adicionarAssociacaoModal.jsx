import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';

import Button from 'common/controls/button';

import './adicionarAssociacaoModal.scss';
import { trackedProperties } from 'modules';
import _ from 'lodash';

const AdicionarAssociacaoModal = ({
  closeModal, onClick, isLoading, title,
  subtitle, buttonTitle, children, Input, getInfo, AddButton,
  associacoesContatos, associacoesConcessionarias,
}) => {
  useEffect(() => {
    getInfo();
    return () => {

    };
  }, [getInfo]);
  return (
    <Modal
      disableCloseButton={isLoading}
      closeModal={closeModal}
      width="610px"
      height="390px"
    >
      <div className="grupos__adicionar-associacoes-modal__container">
        <div className="grupos__adicionar-associacoes-modal__header">
          <div className="grupos__adicionar-associacoes-modal__header_title">
            {title}
          </div>
          <div className="grupos__adicionar-associacoes-modal__header_subtitle">
            {subtitle}
            {AddButton ? <AddButton /> : null}
          </div>
        </div>
        <div className="grupos__adicionar-associacoes-modal__input">
          <Input />
        </div>
        <div className="grupos__adicionar-associacoes-modal__list">
          {children}
        </div>
        <div className="grupos__adicionar-associacoes-modal__footer">
          <Button
            onClick={() => { onClick(); }}
            isLoading={isLoading}
            mixpanelTarget={buttonTitle}
            mixpanelPage={trackedProperties.gruposPage}
            disabled={
              _.isEmpty(associacoesContatos) && _.isEmpty(associacoesConcessionarias)
            }
          >
            {buttonTitle}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

AdicionarAssociacaoModal.propTypes = {
  closeModal: PropTypes.func,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonTitle: PropTypes.string,
  children: PropTypes.node,
  Input: PropTypes.object.isRequired,
  AddButton: PropTypes.any,
  getInfo: PropTypes.func,
  associacoesContatos: PropTypes.array,
  associacoesConcessionarias: PropTypes.array,
};

AdicionarAssociacaoModal.defaultProps = {
  closeModal: () => {},
  onClick: () => {},
  isLoading: false,
  title: null,
  subtitle: null,
  buttonTitle: null,
  children: null,
  AddButton: null,
  getInfo: () => {},
  associacoesContatos: [],
  associacoesConcessionarias: [],
};

export default AdicionarAssociacaoModal;
