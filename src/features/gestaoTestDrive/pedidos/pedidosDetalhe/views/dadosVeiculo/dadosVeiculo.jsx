import React from 'react';
import PropTypes from 'prop-types';

import InputCor from './inputCor';
import InputCorExterna from './inputCorExterna';
import InputDescricao from './inputDescricao';
import InputGrupoOpcionais from './inputGrupoOpcionais';
import InputMarca from './inputMarca';
import InputModelo from './inputModelo';
import InputModelYear from './inputModelYear';
import InputRevestimento from './inputRevestimento';
import InputSerie from './inputSerie';
import InputVersao from './inputVersao';
import InputOpcionais from './inputOpcionais';

import './dadosVeiculo.scss';

const DadosVeiculo = ({ isPeugeotOuCitroen }) => (
  <div
    className="pedidos__dados-veiculo__container"
    data-cy="pedidos-dados-veiculo-container"
  >
    <div className="pedidos__dados-veiculo__container__header_title">
      Veículo
    </div>
    <div className="pedidos__dados-veiculo__container__veiculo">
      <div className="pedidos__dados-veiculo__container__veiculo_marca">
        <InputMarca />
      </div>
      <div className="pedidos__dados-veiculo__container__veiculo_mvs">
        <InputDescricao />
      </div>
    </div>
    <div className="pedidos__dados-veiculo__container__content">
      <div className="pedidos__dados-veiculo__container__content_codmodelo">
        <InputModelo />
      </div>
      <div className="pedidos__dados-veiculo__container__content_codversao">
        <InputVersao />
      </div>
      <div className="pedidos__dados-veiculo__container__content_codserie">
        <InputSerie />
      </div>
      <div className="pedidos__dados-veiculo__container__content_modelyear">
        <InputModelYear />
      </div>
      <div className="pedidos__dados-veiculo__container__content_cor">
        <InputCor />
      </div>
    </div>
    {!isPeugeotOuCitroen && (
    <>
      <div className="pedidos__dados-veiculo__container__detalhes_veiculo">
        <div className="pedidos__dados-veiculo__container__detalhes_veiculo_corexterna">
          <InputCorExterna />
        </div>
        <div className="pedidos__dados-veiculo__container__detalhes_veiculo_revestimento">
          <InputRevestimento />
        </div>
        <div className="pedidos__dados-veiculo__container__detalhes_veiculo_grupoopcionais">
          <InputGrupoOpcionais />
        </div>
      </div>
      <div className="pedidos__dados-veiculo__container__opcionais">
        <div className="pedidos__dados-veiculo__container__opcionais_input">
          <InputOpcionais />
        </div>
      </div>
    </>
    )}
  </div>
);

DadosVeiculo.propTypes = {
  isPeugeotOuCitroen: PropTypes.bool,
};

DadosVeiculo.defaultProps = {
  isPeugeotOuCitroen: false,
};

export default DadosVeiculo;
