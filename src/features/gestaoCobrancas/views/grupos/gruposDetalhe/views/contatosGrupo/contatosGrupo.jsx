import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AssociacoesGrupo from '../commonViews/associacoesGrupo';
import AdicionarAssociacaoModal from '../commonViews/adicionarAssociacaoModal';
import { Loader } from '../../../../../redux/enums';
import ContatosAssociadosList from './contatosAssociadosList';
import ContatosSelector from './contatosSelector';
import AdicionarContatoButton from './adicionarContatoButton';
import ContatosLista from './contatosList';
import ContatoModal from '../../../../contatos/contatosModal';

const ContatosGrupo = ({
  registerLoader, getContatosGrupo, isLoading,
  isModalAssociacaoOpen, insertContatos, closeModalAssociacao,
  isLoadingContato, openModalAssociacao, getContatosAssociacao,
  sendContato, resetModal, isModalEditOpen, openModal,
  closeModal,
}) => {
  const handleOpenEditarModal = (contato) => {
    openModal(contato);
  };

  const handleModal = (status) => {
    if (!status) {
      closeModal();
      resetModal();
    }
  };

  useEffect(() => {
    registerLoader(Loader.contatosGrupo, getContatosGrupo());
  }, [registerLoader, getContatosGrupo]);
  return (
    <>
      <AssociacoesGrupo
        title="Contatos associados ao grupo"
        buttonTitle="Associar Contatos"
        buttonClick={openModalAssociacao}
        isLoading={isLoadingContato}
      >
        <ContatosLista openEditModal={handleOpenEditarModal} />
      </AssociacoesGrupo>
      {isModalAssociacaoOpen ? (
        <AdicionarAssociacaoModal
          title="Associar contato"
          subtitle="Associe um contato existente:"
          buttonTitle="Associar contato"
          isLoading={isLoading}
          onClick={() => insertContatos()}
          closeModal={closeModalAssociacao}
          Input={ContatosSelector}
          getInfo={getContatosAssociacao}
          AddButton={AdicionarContatoButton}
        >
          <ContatosAssociadosList />
        </AdicionarAssociacaoModal>
      ) : null}
      <ContatoModal
        onSubmit={() => sendContato(openModal)}
        openModal={isModalEditOpen}
        setModalOpen={handleModal}
      />
    </>
  );
};

ContatosGrupo.propTypes = {
  getContatosGrupo: PropTypes.func,
  registerLoader: PropTypes.func,
  isLoading: PropTypes.bool,
  isModalAssociacaoOpen: PropTypes.bool,
  insertContatos: PropTypes.func,
  closeModalAssociacao: PropTypes.func,
  isLoadingContato: PropTypes.bool,
  openModalAssociacao: PropTypes.func,
  getContatosAssociacao: PropTypes.func,
  sendContato: PropTypes.func.isRequired,
  resetModal: PropTypes.func,
  isModalEditOpen: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

ContatosGrupo.defaultProps = {
  getContatosGrupo: () => {},
  registerLoader: () => {},
  isLoading: false,
  isModalAssociacaoOpen: false,
  insertContatos: () => {},
  closeModalAssociacao: () => {},
  isLoadingContato: false,
  openModalAssociacao: () => {},
  getContatosAssociacao: () => {},
  resetModal: () => {},
  isModalEditOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

export default ContatosGrupo;
