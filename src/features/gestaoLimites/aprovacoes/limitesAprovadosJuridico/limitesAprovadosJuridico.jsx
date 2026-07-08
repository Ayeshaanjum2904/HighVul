import { React, useEffect, useState } from 'react';
import {
  Page, PageHeader, PageTitle, PageContent, PageFooter,
  PageSubTitle,
} from 'common/layout/page';

import PropTypes from 'prop-types';
import _ from 'lodash';
import { useHistory } from 'react-router';
import { Loading } from 'common/layout/dataGrid/overlays/overlays';
import HistoricoLimite from '../historicoLimite/historicoLimite';
import DadosAprovacao from '../dadosAprovacao';
import ButtonsFooterJuridico from './views/buttonsFooter/index';
import BreadCrumbJuridico from './views/breadCrumbJuridico/breadCrumbJuridico';
import ButtonBack from '../buttonBack';
import DocumentosComplementares from './views/documentosComplementares';
import './limitesAprovadosJuridico.scss';
import DocumentosFormalizar from './views/documentosFormalizar';
import LimiteActions from '../limitesAprovadosPage/views/limitesAprovadosList/limiteActions';

const LimitesAprovadosJuridico = ({
  detalhes, historico, getPessoaDocumentacao, resetStore, enviarProposta,
  user, condicaoSisgar, permissionList, listaPessoaDocumentacao, listaPessoaDocumentacaoLoading,
  getDocumentosFormalizar, listaDocumentosFormalizar, listaDocumentosFormalizarLoading,
  isLoadingDetalhes,

}) => {
  useEffect(() => () => resetStore(), [resetStore]);

  useEffect(() => {
    if (!_.isEmpty(detalhes)) {
      getPessoaDocumentacao(detalhes.idLimite);
      getDocumentosFormalizar(detalhes.idLimite);
    }
  }, [detalhes]);
  const [formSaveFormalizar, setFormSaveFormalizar] = useState(true);

  const history = useHistory();

  const updateStatus = async (id, status, motivo) => {
    if (await enviarProposta(id, status, motivo)) history.replace('/limites/aprovacoes/limites-aprovados');
  };

  const getErrorModalText = () => {
    if (!formSaveFormalizar) return 'Documentos para formalizar';
    return '';
  };

  const statusList = [
    'analise_financiamento_rede',
    'pendente_docs_juridico_dealer',
    'docs_juridico_enviados_parcialmente',
    'docs_juridico_atualizado_dealer',
    'pendente_docs_formalizar_dealer',
    'docs_formalizar_enviados_parcialmente',
    'documentos_atualizados_dealer',
    'docs_formalizar_enviados_sem_retorno',
    'docusing_docs_formalizar_sem_retorno',
    'docs_formalizar_atualizado_dealer',
    'assinatura_docusign',
  ];

  const isReadonlyStatus = !permissionList.isAll && (
    (statusList.includes(detalhes.statusLimite) && permissionList.isGestaoJuridico)
    || permissionList.isGestaoCadastro
  );

  const isLoadingDados = listaDocumentosFormalizarLoading
    || listaPessoaDocumentacaoLoading || isLoadingDetalhes;

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <ButtonBack />
          <BreadCrumbJuridico />
        </PageSubTitle>
        <div className="limite-juridico__page__header">
          <div>
            <PageTitle>Documentos do jurídico</PageTitle>
            <span className="id-limite">
              ID APROVAÇÃO #
              {detalhes.idLimite}
            </span>
          </div>
          <LimiteActions
            iconProps={{ size: 32 }}
            limite={detalhes}
            enviarProposta={updateStatus}
          />
        </div>
      </PageHeader>
      <PageContent>
        {isLoadingDados ? (<Loading message="Carregando aprovação..." />) : (
          <div className="limite-juridico__page__content">
            <HistoricoLimite historico={historico} />
            <DadosAprovacao detalhes={detalhes} user={user} condicaoSisgar={condicaoSisgar} />
            <DocumentosComplementares
              idLimite={detalhes.idLimite}
              isReadonlyStatus={isReadonlyStatus}
            />
            {(!listaDocumentosFormalizarLoading) && (
              <DocumentosFormalizar
                idLimite={detalhes.idLimite}
                setFormSave={setFormSaveFormalizar}
                user={user}
                isReadonlyStatus={isReadonlyStatus}
              />
            )}
          </div>
        )}
      </PageContent>
      <PageFooter>
        <ButtonsFooterJuridico
          idLimite={detalhes.idLimite}
          statusLimite={detalhes.statusLimite}
          openForm={!formSaveFormalizar}
          alertModalType={getErrorModalText()}
          user={user}
          listaDocumentosFormalizar={listaDocumentosFormalizar}
          listaPessoaDocumentacao={listaPessoaDocumentacao}
          isReadonlyStatus={isReadonlyStatus}
        />
      </PageFooter>
    </Page>
  );
};

LimitesAprovadosJuridico.propTypes = {
  detalhes: PropTypes.any,
  historico: PropTypes.array,
  resetStore: PropTypes.func,
  getPessoaDocumentacao: PropTypes.func,
  getDocumentosFormalizar: PropTypes.func,
  listaPessoaDocumentacao: PropTypes.array,
  listaDocumentosFormalizar: PropTypes.array,
  enviarProposta: PropTypes.func,
  user: PropTypes.object.isRequired,
  condicaoSisgar: PropTypes.string,
  listaDocumentosFormalizarLoading: PropTypes.bool,
  listaPessoaDocumentacaoLoading: PropTypes.bool,
  isLoadingDetalhes: PropTypes.bool,
  permissionList: PropTypes.object,
};

LimitesAprovadosJuridico.defaultProps = {
  detalhes: {},
  historico: [],
  listaDocumentosFormalizar: [],
  listaPessoaDocumentacao: [],
  resetStore: () => { },
  getPessoaDocumentacao: () => { },
  getDocumentosFormalizar: () => { },
  enviarProposta: () => { },
  condicaoSisgar: null,
  listaDocumentosFormalizarLoading: false,
  listaPessoaDocumentacaoLoading: false,
  isLoadingDetalhes: false,
  permissionList: null,
};

export default LimitesAprovadosJuridico;
