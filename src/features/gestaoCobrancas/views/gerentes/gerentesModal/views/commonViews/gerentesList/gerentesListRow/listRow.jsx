import React from 'react';
import PropTypes from 'prop-types';

import { camelFormat } from 'utils/format';
import DeleteButton from '../deleteButton';

import './listRow.scss';

const ListRow = ({
  gerente, deleteGerente, deleteGerenteList,
}) => (
  <div className="gerentes__modal-list-row__container">
    <div className="gerentes__modal-list-row__item gerentes__modal-list-row__nome">
      {camelFormat(gerente.nome, 2)}
    </div>
    <div className="gerentes__modal-list-row__item gerentes__modal-list-row__email">
      {gerente.email}
    </div>
    <div className="gerentes__modal-list-row__item gerentes__modal-list-row__delete">
      <DeleteButton
        onClick={() => deleteGerente(gerente.id)}
        isLoading={deleteGerenteList.some((i) => i === gerente.id)}
      />
    </div>
  </div>
);

ListRow.propTypes = {
  gerente: PropTypes.object,
  deleteGerente: PropTypes.func,
  deleteGerenteList: PropTypes.array,
};

ListRow.defaultProps = {
  gerente: {},
  deleteGerente: () => null,
  deleteGerenteList: [],
};

export default ListRow;
