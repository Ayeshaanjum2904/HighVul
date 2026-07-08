import React from 'react';
import PropTypes from 'prop-types';

import { camelFormat } from 'utils/format';
import DeleteButton from '../deleteButton';

import './listRow.scss';

const ListRow = ({
  analista, deleteAnalista, deleteAnalistaList,
}) => (
  <div className="analistas__modal-list-row__container">
    <div className="analistas__modal-list-row__item analistas__modal-list-row__nome">
      {camelFormat(analista.nome, 2)}
    </div>
    <div className="analistas__modal-list-row__item analistas__modal-list-row__email">
      {analista.email}
    </div>
    <div className="analistas__modal-list-row__item analistas__modal-list-row__delete">
      <DeleteButton
        onClick={() => deleteAnalista(analista.id)}
        isLoading={deleteAnalistaList.some((i) => i === analista.id)}
      />
    </div>
  </div>
);

ListRow.propTypes = {
  analista: PropTypes.object,
  deleteAnalista: PropTypes.func,
  deleteAnalistaList: PropTypes.array,
};

ListRow.defaultProps = {
  analista: {},
  deleteAnalista: () => null,
  deleteAnalistaList: [],
};

export default ListRow;
