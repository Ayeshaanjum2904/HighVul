import React from 'react';
import PropTypes from 'prop-types';
import './grupoOption.scss';
import MarcaBadge from 'common/views/logoMarca';

const GrupoOption = ({
  brand, dealerName, dealerId,
}) => (
  <div
    className="item-grupo-container"
  >
    <MarcaBadge
      marca={(brand)}
    />
    <div className="item-grupo-container_info">
      <span className="item-grupo-container_info_nome">{dealerName}</span>
      <span className="item-grupo-container_info_id">{dealerId}</span>
    </div>
  </div>
);

GrupoOption.propTypes = {
  brand: PropTypes.string,
  dealerName: PropTypes.string,
  dealerId: PropTypes.string,
};

GrupoOption.defaultProps = {
  brand: '',
  dealerName: '',
  dealerId: '',
};
export default GrupoOption;
