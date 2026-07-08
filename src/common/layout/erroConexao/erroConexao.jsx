import React from 'react';
import PropTypes from 'prop-types';

import './erroConexao.scss';

const ErroConexao = ({
  title, message, children,
}) => (
  <div>
    <div className="erro-conexao">
      <div className="erro-conexao-image-container">
        {children}
      </div>
      <div className="erro-conexao-span-container">
        <span className="erro-conexao-span-bigger">
          {title}
        </span>
      </div>
      <div className="erro-conexao-span-container">
        <span className="erro-conexao-span-smaller">
          {message}
        </span>
      </div>
    </div>
  </div>
);

ErroConexao.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default ErroConexao;
