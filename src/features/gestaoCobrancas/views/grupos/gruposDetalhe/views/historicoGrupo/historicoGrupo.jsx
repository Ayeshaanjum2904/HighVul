import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Loader } from '../../../../../redux/enums';
import AssociacoesGrupo from '../commonViews/associacoesGrupo';
import HistoricoList from './historicoList';
import HistoricoDetail from '../../../../historico/historicoDetalhe';

const HistoricoGrupo = ({ isModalOpen, getHistoricoGrupos, registerLoader }) => {
  useEffect(() => {
    registerLoader(Loader.historicoGrupo, getHistoricoGrupos());
  }, [registerLoader, getHistoricoGrupos]);

  return (
    <>
      <AssociacoesGrupo
        title="Histórico de cobranças já enviadas"
      >
        <HistoricoList />
      </AssociacoesGrupo>

      {isModalOpen ? (<HistoricoDetail />) : null}
    </>
  );
};

HistoricoGrupo.propTypes = {
  isModalOpen: PropTypes.bool,
  getHistoricoGrupos: PropTypes.func,
  registerLoader: PropTypes.func,
};

HistoricoGrupo.defaultProps = {
  isModalOpen: false,
  getHistoricoGrupos: () => {},
  registerLoader: () => {},
};

export default HistoricoGrupo;
