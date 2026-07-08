import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List, { ListContent } from 'common/layout/list';
import AlertModal from 'common/layout/alertModal';
import ContatosListHeader from './contatosListHeader';
import ContatosListRow from './contatosListRow';

import './contatosPageList.scss';

const ContatosPageList = ({
  contatos, isLoading, isError, openModalEdit, deleteContato, setContatoId,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = (id) => {
    setContatoId(id);
    setOpenDeleteModal(true);
  };
  return (
    <div className="contatos__list__container">
      <div className="contatos__list__header">
        <ContatosListHeader />
      </div>
      <List
        isLoading={isLoading}
        isError={isError}
        isEmpty={_.isEmpty(contatos)}
      >
        <ListContent>
          {(Array.isArray(contatos) ? contatos : []).map((c, i) => (
            <ContatosListRow
              contato={c}
              key={i}
              openModalEdit={openModalEdit}
              openModalDelete={handleOpenDeleteModal}
            />
          ))}
        </ListContent>

        <ListContent type="empty">
          <div className="contatos__list__message-container">
            Nenhum contato foi encontrado.
          </div>
        </ListContent>

        <ListContent type="error">
          <div className="contatos__list__message-container">
            Ocorreu um erro ao carregar os contatos.
          </div>
        </ListContent>
      </List>
      <AlertModal
        buttonAction={() => deleteContato()}
        title="Deseja excluir esse contato?"
        subtitle="Ele será excluído de todos os grupos em que pertence, mas você poderá criá-lo e associá-lo novamente se desejar."
        textRedButton="Excluir Contato"
        openModal={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </div>
  );
};

ContatosPageList.propTypes = {
  contatos: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  openModalEdit: PropTypes.func,
  deleteContato: PropTypes.func,
  setContatoId: PropTypes.func,
};

ContatosPageList.defaultProps = {
  contatos: null,
  isLoading: false,
  isError: false,
  openModalEdit: () => {},
  deleteContato: () => {},
  setContatoId: () => {},
};

export default ContatosPageList;
