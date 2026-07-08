import React, { useEffect, useState } from 'react';
import SummaryPage from 'common/controls/summaryPage';
import HistoricoObservacoes from 'common/controls/historicoObservacoes';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import _ from 'lodash';
import NotificationsIcon from '@mui/icons-material/Notifications';
import moment from 'moment';
import 'moment/locale/pt-br';

const ObservacoesAprovacao = ({
  getObservacoes,
  limite,
  insertObservacao,
  observacoesList,
  isLoadingObservacoes,
  insertControleObservacao,
  visualizado,
  isModal,
  perfis,
  resetStore,
  uploadArquivoTemporario,
  getDocumentoDownload,
}) => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => () => resetStore(), [resetStore]);

  const handleObservacaoSubmit = async (data) => {
    await insertObservacao(data, limite.idLimite);
    getObservacoes(limite.idLimite);
  };

  const handleUploadArquivoTemporario = async (file) => uploadArquivoTemporario(file);

  const handleDownloadDocumento = async (guidDocumento) => getDocumentoDownload(guidDocumento);

  useEffect(() => {
    if (!_.isEmpty(limite)) {
      getObservacoes(limite.idLimite);
    }
  }, [getObservacoes, limite]);

  const handleChangeSummary = (isOpen) => {
    if (isOpen && !visualizado) {
      setShowIcon(false);
      insertControleObservacao(limite.idLimite, moment().format('YYYY-MM-DDTHH:mm:ss'));
    }
  };

  useEffect(() => {
    setShowIcon(!visualizado);
  }, [visualizado]);

  const level = isModal ? 4 : 0;

  return (
    <Stack paddingRight="16px" marginTop="8px">
      <SummaryPage
        title="Observações da aprovação"
        level={level}
        handleOpenChange={handleChangeSummary}
        IconTitle={showIcon && !isLoadingObservacoes ? (
          <NotificationsIcon
            style={{
              display: 'inline-block',
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#C31E10',
              color: '#FFFFFF',
              textAlign: 'center',
              lineHeight: '24px',
              padding: '4px',
            }}
          />
        ) : null}
      >
        {!isLoadingObservacoes && (
          <HistoricoObservacoes
            observacoes={observacoesList}
            insertObservacao={handleObservacaoSubmit}
            uploadArquivoTemporario={handleUploadArquivoTemporario}
            perfis={perfis}
            getDocumentoDownload={handleDownloadDocumento}
          />
        )}
      </SummaryPage>
    </Stack>
  );
};

ObservacoesAprovacao.propTypes = {
  getObservacoes: PropTypes.func,
  insertObservacao: PropTypes.func,
  limite: PropTypes.any,
  observacoesList: PropTypes.array,
  isLoadingObservacoes: PropTypes.bool,
  insertControleObservacao: PropTypes.func,
  visualizado: PropTypes.bool,
  isModal: PropTypes.bool,
  perfis: PropTypes.any,
  resetStore: PropTypes.func,
  uploadArquivoTemporario: PropTypes.func,
  getDocumentoDownload: PropTypes.func,
};

ObservacoesAprovacao.defaultProps = {
  getObservacoes: () => {},
  insertObservacao: () => {},
  limite: {},
  observacoesList: [],
  isLoadingObservacoes: false,
  insertControleObservacao: () => {},
  visualizado: true,
  isModal: false,
  perfis: {},
  resetStore: () => {},
  uploadArquivoTemporario: () => {},
  getDocumentoDownload: () => {},
};

export default ObservacoesAprovacao;
