/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';

import PropTypes from 'prop-types';
import _ from 'lodash';
import BreadCrumbCadastro from './views/breadCrumbCadastro';
import ButtonsFooter from './views/buttonsFooter';
import './limitesAprovadosCadastro.scss';
import ButtonBack from '../buttonBack';
import HistoricoLimite from '../historicoLimite/historicoLimite';
import DadosAprovacao from '../dadosAprovacao';
import LimiteActions from '../limitesAprovadosPage/views/limitesAprovadosList/limiteActions';
import DocumentosCadastro from './views/documentosCadastro';

const LimitesAprovadosCadastro = ({
  detalhes, historico, cadastroPage, getPessoaDocumentacao, enviarProposta, permissionList,
}) => {
  const [openForm, setOpenForm] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (!cadastroPage) history.replace('limites-aprovados');
    if (!_.isEmpty(detalhes)) {
      getPessoaDocumentacao(detalhes.idLimite);
    }
  }, [getPessoaDocumentacao, detalhes]);

  const updateStatus = async (id, status, motivo) => {
    if (await enviarProposta(id, status, motivo)) history.replace('/limites/aprovacoes/limites-aprovados');
  };

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <ButtonBack />
          <BreadCrumbCadastro />
        </PageSubTitle>
        <div className="limite-cadastro__page__header">
          <div>
            <PageTitle>Lista de documentos</PageTitle>
            <span className="id-limite">
              ID APROVAÇÃO #
              {detalhes.idLimite}
            </span>
          </div>
          <LimiteActions
            iconProps={{ size: 32 }}
            limite={detalhes}
            enviarProposta={updateStatus}
            disabled={permissionList.isGestaoJuridico}
          />
        </div>
      </PageHeader>
      <PageContent>
        <div className="limite-cadastro__page__content">
          <HistoricoLimite historico={historico} />
          <DadosAprovacao detalhes={detalhes} />
          {(detalhes && !_.isEmpty(detalhes))
            && <DocumentosCadastro idLimite={detalhes.idLimite} />}
        </div>
      </PageContent>
      <PageFooter>
        <ButtonsFooter
          limite={detalhes}
          openForm={openForm}
        />
      </PageFooter>
    </Page>
  );
};

LimitesAprovadosCadastro.propTypes = {
  detalhes: PropTypes.any,
  historico: PropTypes.array,
  getPessoaDocumentacao: PropTypes.func,
  enviarProposta: PropTypes.func,
  cadastroPage: PropTypes.bool,
  permissionList: PropTypes.object,
};

LimitesAprovadosCadastro.defaultProps = {
  detalhes: {},
  historico: [],
  getPessoaDocumentacao: () => { },
  enviarProposta: () => { },
  cadastroPage: false,
  permissionList: null,
};

export default LimitesAprovadosCadastro;
