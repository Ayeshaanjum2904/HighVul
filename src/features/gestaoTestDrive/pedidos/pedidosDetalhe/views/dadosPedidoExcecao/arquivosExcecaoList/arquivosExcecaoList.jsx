import React from 'react';
import PropTypes from 'prop-types';
import ArquivosExcecao from './arquivosExcecao';
import './arquivosExcecaoList.scss';

const ArquivosExcecaoList = ({ arquivosExcecao }) => (
  <div className="arquivos-execao-list__container">
    <div className="arquivos-execao-list__subtitle">
      Documentos Anexados
    </div>
    {(Array.isArray(arquivosExcecao) ? arquivosExcecao : []).map((arquivo, i) => (
      <ArquivosExcecao
        arquivo={arquivo}
        key={i}
      />
    ))}
  </div>
);

ArquivosExcecaoList.propTypes = {
  arquivosExcecao: PropTypes.array,
};

ArquivosExcecaoList.defaultProps = {
  arquivosExcecao: null,
};

export default ArquivosExcecaoList;
