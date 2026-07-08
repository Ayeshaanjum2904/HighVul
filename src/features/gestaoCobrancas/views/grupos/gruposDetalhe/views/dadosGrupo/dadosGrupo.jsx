import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import List, { ListContent } from 'common/layout/list';
import { Loader } from '../../../../../redux/enums';

import InputNomeConta from './views/formFields/inputNomeConta';
import InputRazaoSocial from './views/formFields/inputRazaoSocial';
import InputCnpj from './views/formFields/inputCnpj';
import SelectMarca from './views/formFields/selectMarca';
import SelectRegional from './views/formFields/selectRegional';
import InputCodigoRegional from './views/formFields/inputCodigoRegional';
import InputEmailSupervisor from './views/formFields/inputEmailSupervisor';
import InputAnalistaRede from './views/formFields/inputAnalistaRede';
import InputInscMunicipal from './views/formFields/inputInscMunicipal';
import InputInscEstadual from './views/formFields/inputInscEstadual';
import FormButtons from './views/formButtons';

import './dadosGrupo.scss';

const DadosGrupo = ({
  getDetalhesGrupo, registerLoader, isLoading, isError,
}) => {
  useEffect(() => {
    registerLoader(Loader.detalheGrupo, getDetalhesGrupo());
  }, [registerLoader, getDetalhesGrupo]);

  return (
    <div className="grupos__details__dados-grupo__container">
      <div className="grupos__details__dados-grupo__title">
        Dados do grupo
        {!isLoading && !isError ? <FormButtons /> : null}
      </div>
      <List
        isLoading={isLoading}
        isError={isError}
        disabledScrolls
      >
        <ListContent>
          <div className="grupos__details__dados-grupo__content">
            <div className="grupos__details__dados-grupo__content_nome-conta">
              <InputNomeConta />
            </div>
            <div className="grupos__details__dados-grupo__content_razao-social">
              <InputRazaoSocial />
            </div>
            <div className="grupos__details__dados-grupo__content_cnpj">
              <InputCnpj />
            </div>
            <div className="grupos__details__dados-grupo__content_select-marca">
              <SelectMarca />
            </div>
            <div className="grupos__details__dados-grupo__content_select-regional">
              <SelectRegional />
            </div>
            <div className="grupos__details__dados-grupo__content_regional">
              <InputCodigoRegional />
            </div>
            <div className="grupos__details__dados-grupo__content_email-supervisor">
              <InputEmailSupervisor />
            </div>
            <div className="grupos__details__dados-grupo__content_analista-rede">
              <InputAnalistaRede />
            </div>
            <div className="grupos__details__dados-grupo__content_insc-municipal">
              <InputInscMunicipal />
            </div>
            <div className="grupos__details__dados-grupo__content_insc-estadual">
              <InputInscEstadual />
            </div>
          </div>
        </ListContent>
        <ListContent type="error">
          Ocorreu um erro ao carregar os detalhes do grupo.
        </ListContent>
      </List>
    </div>
  );
};

DadosGrupo.propTypes = {
  getDetalhesGrupo: PropTypes.func,
  registerLoader: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

DadosGrupo.defaultProps = {
  getDetalhesGrupo: () => {},
  registerLoader: () => {},
  isLoading: false,
  isError: false,
};

export default DadosGrupo;
