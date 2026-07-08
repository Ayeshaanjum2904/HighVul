import React from 'react';
import PropTypes from 'prop-types';

import './indicadorPagina.scss';

const IndicadorPagina = ({
  pagina, itensPorPagina, gruposOfertas, className,
}) => {
  const primeiroGrupoOferta = (gruposOfertas?.length > 0 ? gruposOfertas[0] : {});
  const totalItems = primeiroGrupoOferta.itensTotal || 0;

  const itemInicial = (pagina * itensPorPagina) + 1;

  const ultimoItemDaPagina = (pagina + 1) * itensPorPagina;
  const itemFinal = ultimoItemDaPagina > totalItems ? totalItems : ultimoItemDaPagina;

  return (
    <div className={`ofertas-indicador-pagina__container ${className}`}>
      {`${itemInicial} - ${itemFinal} de ${totalItems}`}
    </div>
  );
};

IndicadorPagina.propTypes = {
  pagina: PropTypes.number,
  itensPorPagina: PropTypes.number,
  gruposOfertas: PropTypes.array,
  className: PropTypes.string,
};

IndicadorPagina.defaultProps = {
  pagina: 0,
  itensPorPagina: 0,
  gruposOfertas: null,
  className: '',
};

export default IndicadorPagina;
