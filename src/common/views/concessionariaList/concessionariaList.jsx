import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import List, { ListContent } from 'common/layout/list';
import ConcessionariaListRow from './views/concessionariaListRow';
import AddConcessionariaButton from './views/addConcessionariaButton';

import './concessionariaList.scss';

const ConcessionariaList = ({
  selectedConcessionarias,
  isLoading,
  getConcessionarias,
  onAdd,
  onRemove,
  mixpanelPage,
}) => {
  useEffect(() => {
    getConcessionarias();
  }, [getConcessionarias]);

  const count = selectedConcessionarias.length;

  return (
    <div className="concessionaria-list__container">
      <div className="concessionaria-list__container__header">
        Condição exclusiva
        {count > 0 ? (
          <>
            <span>
              No momento,
              {' '}
              {count === 1 ? 'existe' : 'existem'}
              {' '}
              <strong>
                {count}
                {' '}
                {count === 1 ? 'concessionária adicionada.' : 'concessionárias adicionadas.'}
              </strong>
              {' '}
              Apenas as concessionárias adicionadas receberão esta condição.
            </span>
            <span>
              Para adicionar mais concessionárias na seleção, utilize o botão abaixo.
            </span>
          </>
        )
          : (
            <span>
              Para criar uma condição exclusiva para uma ou mais concessionárias,
              adicione elas com o botão abaixo.
            </span>
          )}

      </div>

      <div className="concessionaria-list__container__button">
        <AddConcessionariaButton onClick={onAdd} mixpanelPage={mixpanelPage} />
        <span className="concessionaria-list__container__button__info">
          Se nenhuma concessionária for adicionada,
          a condição cadastrada ficará disponível para todas as concessionárias.
        </span>
      </div>

      <div className="concessionaria-list__container__list">
        {count > 0 && (
          <span className="concessionaria-list__container__list__title">
            Concessionárias Adicionadas
          </span>
        )}
        <List
          autoHeight
          autoHeightMax="100%"
          isLoading={isLoading}
        >
          {count > 0 ? (
            <ListContent>
              {selectedConcessionarias
                .map((c) => (
                  <ConcessionariaListRow
                    concessionaria={c}
                    key={c.value}
                    onRemove={onRemove}
                    mixpanelPage={mixpanelPage}
                  />
                ))}
            </ListContent>
          ) : null}
          <ListContent type="error">
            Ocorreu um erro ao carregar as concessionárias.
          </ListContent>
        </List>
      </div>
    </div>
  );
};

ConcessionariaList.propTypes = {
  selectedConcessionarias: PropTypes.array,
  isLoading: PropTypes.bool,
  getConcessionarias: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  mixpanelPage: PropTypes.string,
};

ConcessionariaList.defaultProps = {
  selectedConcessionarias: [],
  isLoading: false,
  getConcessionarias: () => {},
  onAdd: () => {},
  onRemove: () => {},
  mixpanelPage: '',
};

export default ConcessionariaList;
