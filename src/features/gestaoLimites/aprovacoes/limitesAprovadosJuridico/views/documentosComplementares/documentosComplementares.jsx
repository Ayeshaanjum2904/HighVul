import React, { useEffect, useState, useMemo } from 'react';
import { permissions } from 'modules/auth/permissions';
import { hasPermission } from 'modules/auth/authLogic';
import SummaryPage from 'common/controls/summaryPage';
import { Box, Stack } from '@mui/material';
import _ from 'lodash';
import DocumentosComplementaresStyle from './documentosComplementares.style';
import InfoDocumentosComplementares from './infoDocumentosComplementares';
import ButtonDocument from '../buttonDocument';
import DocumentoComplementarForm from './documentoComplementarForm';
import { getDocumentStatus, renderStatusItens } from './documentoComplementarStatus/statusUtils';

const documentosComplementares = ({
  listaPessoaDocumentacao, deleteDocumentosComplementares, idLimite, user,
  statusLimite, isReadonlyStatus,
}) => {
  const statusSummary = listaPessoaDocumentacao?.flatMap(getDocumentStatus)
    .filter((status) => status !== null && status !== undefined);

  const handleDeleteDocumentos = (idDocumento) => {
    deleteDocumentosComplementares(idDocumento, idLimite);
  };
  const [statusDestino, setStatusDestino] = useState();
  const [mudarStatus, setMudarStatus] = useState(false);
  const [OpenFormButton, setOpenFormButton] = useState(false);

  const contarDocumentosPreenchidos = (array) => array.reduce((total, pessoa) => total
    + pessoa.documentoPendente.filter(
      (doc) => doc.documentoNome,
    ).length, 0);

  useEffect(() => {
    if (contarDocumentosPreenchidos(listaPessoaDocumentacao) > 1) setStatusDestino('docs_juridico_enviados_parcialmente');
    else setStatusDestino('pendente_docs_juridico_dealer');
  }, [listaPessoaDocumentacao]);

  useEffect(() => {
    setMudarStatus(hasPermission(user, permissions.limitesAprovados.gestaoFinanciamentoRede)
    && statusLimite !== statusDestino);
  }, [statusDestino]);

  const isEmpty = useMemo(
    () => !listaPessoaDocumentacao || listaPessoaDocumentacao.length === 0,
    [listaPessoaDocumentacao],
  );

  return (
    <DocumentosComplementaresStyle>
      <Stack paddingRight="16px" marginTop="8px">
        <SummaryPage
          level={0}
          title="Documentos complementares"
          IconTitle={renderStatusItens(statusSummary)}
        >
          {(OpenFormButton || isEmpty) && (
          <DocumentoComplementarForm
            enabled={!isReadonlyStatus}
            idLimite={idLimite}
            hideCloseButton={isEmpty}
            closeForm={() => setOpenFormButton(false)}
          />
          )}
          {listaPessoaDocumentacao?.map((item, index) => (
            <InfoDocumentosComplementares
              key={item.idPessoaDocumentacaoJuridico}
              listaDocumentacaoJuridico={item}
              removeButtonClick={handleDeleteDocumentos}
              idLimite={idLimite}
              mudarStatus={mudarStatus}
              statusDestino={statusDestino}
              indexPessoa={index}
              isReadonlyStatus={isReadonlyStatus}
            />
          ))}
          {(
            !_.isNull(listaPessoaDocumentacao)
            && !_.isEmpty(listaPessoaDocumentacao) && !isReadonlyStatus
          ) && (
            <Box padding="8px" alignSelf="flex-end">
              <ButtonDocument
                onClick={setOpenFormButton}
                preventAction={OpenFormButton}
              />
            </Box>
          )}
        </SummaryPage>
      </Stack>
    </DocumentosComplementaresStyle>
  );
};

export default documentosComplementares;
