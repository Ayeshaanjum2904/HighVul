import React from 'react';
import PropTypes from 'prop-types';

import List, { ListContent } from 'common/layout/list';
import CondicaoListRow from './views/condicaoListRow';
import AddButton from './views/addMvsButton';

import './condicaoList.scss';

const DescontosList = ({
  selectedMvs, mvsList, isLoading, isThereMvs, isSelectedBrand,
}) => (
  <div className="condicao-list__container">
    <div className="condicao-list__container__header">
      Adicionar veículos a condição
      <span>Escolha quais veículos fazem parte da carta do mês</span>
    </div>
    <div className="condicao-list__container__list">
      <List
        autoHeight
        autoHeightMax="100%"
        isLoading={isLoading}
      >
        { selectedMvs.length !== 0 && mvsList.length > 0
          ? (
            <ListContent>
              {(Array.isArray(selectedMvs) ? selectedMvs : []).map((m, i) => (
                m?.status !== 0 ? <CondicaoListRow selectedMvs={m} key={i} /> : null
              ))}
            </ListContent>
          ) : null}
        <ListContent type="error">
          Ocorreu um erro ao carregar as condições.
        </ListContent>
      </List>
    </div>
    <div className="condicao-list__container__button">
      <AddButton />
      {isThereMvs ? (
        <span className="condicao-list__container__button__empty">
          Não há veículos disponíveis para essa marca.
          <br />
          Para incluir novos veículos acesse a página de cadastro de veículos
        </span>
      ) : null}
      {isSelectedBrand ? (
        <span className="condicao-list__container__button__info">
          Selecione uma marca para escolher os veículos.
        </span>
      ) : null}
    </div>
  </div>
);

DescontosList.propTypes = {
  selectedMvs: PropTypes.array,
  mvsList: PropTypes.array,
  isLoading: PropTypes.bool,
  isThereMvs: PropTypes.bool,
  isSelectedBrand: PropTypes.bool,
};

DescontosList.defaultProps = {
  selectedMvs: [],
  mvsList: [],
  isLoading: false,
  isThereMvs: false,
  isSelectedBrand: false,
};

export default DescontosList;
