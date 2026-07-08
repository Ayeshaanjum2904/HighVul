import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ChevronLeft } from 'react-feather';

import './seletorPagina.scss';

const SeletorPagina = ({
  pagina, setPagina, ofertas, isLoading, itensPorPagina,
}) => {
  const primeiroGrupoOferta = (ofertas?.length > 0 ? ofertas[0] : {});
  const totalItems = primeiroGrupoOferta.itensTotal || 0;

  const ultimaPagina = Math.floor((totalItems - 1) / itensPorPagina);

  return (
    <div className="ofertas-seletor-pagina__container">
      <div className="ofertas-seletor-pagina__left-container">
        <ChevronLeft
          style={{
            color: (pagina === 0 || isLoading) ? '#e4e9f2' : '#8f9bb3',
            cursor: (pagina === 0 || isLoading) ? 'default' : 'pointer',
            width: 18,
            height: 18,
          }}
          onClick={() => ((pagina === 0 || isLoading) ? null : setPagina(pagina - 1))}
        />
      </div>
      <div className="ofertas-seletor-pagina__value-container">
        {pagina + 1}
      </div>

      <div className="ofertas-seletor-pagina__right-container">
        <ChevronRight
          style={{
            color: (ultimaPagina <= pagina || isLoading) ? '#e4e9f2' : '#8f9bb3',
            cursor: (ultimaPagina <= pagina || isLoading) ? 'default' : 'pointer',
            width: 18,
            height: 18,
          }}
          onClick={() => ((ultimaPagina <= pagina || isLoading)
            ? null : setPagina(pagina + 1))}
        />
      </div>
    </div>
  );
};
SeletorPagina.propTypes = {
  pagina: PropTypes.number,
  setPagina: PropTypes.func,
  ofertas: PropTypes.array,
  isLoading: PropTypes.bool,
  itensPorPagina: PropTypes.number,
};

SeletorPagina.defaultProps = {
  pagina: '',
  setPagina: () => {},
  ofertas: null,
  isLoading: false,
  itensPorPagina: 0,
};

export default SeletorPagina;
