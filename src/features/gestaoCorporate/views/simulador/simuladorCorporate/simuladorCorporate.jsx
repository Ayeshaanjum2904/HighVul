import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';
import { formatDate } from 'utils/format';

import UploadDocumento from 'common/controls/fileButton/uploadDocumento';
import NewButton from 'common/controls/newButton/newButton';
import { convertBytesToMb } from 'utils/file';

import BreadCrumbSimulador from './breadCrumbSimulador';

import {
  SimuladorWrapper,
  Content,
  Section,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  UploadContainer,
  UploadInput,
  UploadButton,
  InfoSection,
  InfoTitle,
  InfoContent,
  InfoItem,
  InfoValue,
  InfoLink,
  ErrorMessage,
  ErrorMessageTitle,
  ErrorMessageSubtitle,
} from './simuladorCorporate.styles';

const SimuladorCorporate = ({
  isLoadingAnexo,
  errorMessage,
  dadosConvertidos,
  isSaving,
  isSaved,
  configuracao,
  isExportingTaxas,
  inserirAnexo,
  salvarTaxas,
  getConfiguracaoTaxasAtuais,
  exportarTaxas,
  limparAnexoTaxas,
  resetStore,
}) => {
  const [documento, setDocumento] = useState(null);

  useEffect(() => {
    getConfiguracaoTaxasAtuais();
  }, [getConfiguracaoTaxasAtuais]);

  useEffect(() => () => resetStore(), [resetStore]);

  useEffect(() => {
    if (isSaved) {
      setDocumento(null);
      limparAnexoTaxas();
    }
  }, [isSaved, limparAnexoTaxas]);

  const handleUpload = (file) => {
    if (errorMessage) {
      limparAnexoTaxas();
    }

    setDocumento({
      nome: file.name,
      tamanho: convertBytesToMb(file.size),
      file,
      isError: false,
      textoErro: null,
    });
    inserirAnexo(file);
  };

  const handleDelete = () => {
    setDocumento(null);
    limparAnexoTaxas();
  };

  const handleErroDocumento = (mensagemErro) => {
    if (errorMessage) {
      limparAnexoTaxas();
    }

    setDocumento({
      isError: true,
      textoErro: mensagemErro,
    });
  };

  const handleSalvar = () => {
    if (dadosConvertidos) {
      salvarTaxas();
    }
  };

  const handleExportar = () => {
    exportarTaxas();
  };

  const getExportButtonText = () => {
    if (isExportingTaxas) return 'Exportando...';
    return configuracao.temDados ? 'Exportar taxas vigentes' : 'Exportar planilha modelo';
  };

  const getUserFullText = () => {
    if (!configuracao.usuarioNome) return '';
    return configuracao.usuarioNome;
  };

  return (
    <SimuladorWrapper>
      <Page>
        <PageHeader>
          <PageSubTitle>
            <BreadCrumbSimulador />
          </PageSubTitle>
          <PageTitle>Simulador</PageTitle>
        </PageHeader>
        <PageContent>
          <Content>
            <Section>
              <SectionHeader>
                <SectionTitle>Inserir taxas</SectionTitle>
                <SectionSubtitle>
                  Insira o arquivo com as informações das taxas vigentes
                </SectionSubtitle>
              </SectionHeader>
              <UploadContainer>
                <UploadInput>
                  <UploadDocumento
                    uploadDocumento={handleUpload}
                    deleteDocumento={handleDelete}
                    setErroDocumento={handleErroDocumento}
                    documento={
                      errorMessage
                        ? { isError: true, textoErro: errorMessage.trim() }
                        : documento
                    }
                    placeholder="Anexe o arquivo"
                    accept=".xlsx,.xls"
                    validateAllTypes
                    showDeleteButton={!!documento && !errorMessage}
                    hideLabel
                    width="100%"
                    maxWidth="462px"
                    isLoading={isLoadingAnexo}
                    disabled={isSaving}
                  />
                </UploadInput>
                <UploadButton>
                  {isSaving ? (
                    <CircularProgress color="inherit" size="18px" />
                  ) : (
                    <NewButton
                      onClick={handleSalvar}
                      disabled={!dadosConvertidos || isLoadingAnexo}
                      width="135px"
                    >
                      <span>Salvar taxas</span>
                    </NewButton>
                  )}
                </UploadButton>
              </UploadContainer>
            </Section>

            <InfoSection>
              <InfoTitle>
                Informações da configuração atual
              </InfoTitle>
              <InfoContent>
                <InfoItem>
                  Última atualização:
                  {' '}
                  <InfoValue>
                    {configuracao.ultimaAtualizacao
                      && formatDate(configuracao.ultimaAtualizacao, 'DD/MM/YYYY [às] HH:mm')}
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  Alterado por:
                  {' '}
                  <InfoValue title={getUserFullText()}>
                    {getUserFullText()}
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  Existem taxas de financiamento até:
                  {' '}
                  <InfoValue>
                    {configuracao.vigenciaAteTaxas
                      && formatDate(configuracao.vigenciaAteTaxas, 'DD/MM/YYYY')}
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  Existem valores de registro por estado vigentes até:
                  {' '}
                  <InfoValue>
                    {configuracao.vigenciaAteValoresRegistro
                      && formatDate(configuracao.vigenciaAteValoresRegistro, 'DD/MM/YYYY')}
                  </InfoValue>
                </InfoItem>
                <InfoLink type="button" onClick={handleExportar} disabled={isExportingTaxas}>
                  {getExportButtonText()}
                </InfoLink>
              </InfoContent>
            </InfoSection>
            {!configuracao.temDados && (
              <ErrorMessage>
                <ErrorMessageTitle>
                  Ainda não há taxas cadastradas.
                </ErrorMessageTitle>
                <ErrorMessageSubtitle>
                  Exporte a planilha modelo, insira as taxas desejadas e anexe o arquivo.
                </ErrorMessageSubtitle>
              </ErrorMessage>
            )}
          </Content>
        </PageContent>
      </Page>
    </SimuladorWrapper>
  );
};

SimuladorCorporate.propTypes = {
  isLoadingAnexo: PropTypes.bool,
  errorMessage: PropTypes.string,
  dadosConvertidos: PropTypes.object,
  isSaving: PropTypes.bool,
  isSaved: PropTypes.bool,
  configuracao: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    ultimaAtualizacao: PropTypes.string,
    usuarioNome: PropTypes.string,
    vigenciaAteTaxas: PropTypes.string,
    vigenciaAteValoresRegistro: PropTypes.string,
    temDados: PropTypes.bool,
  }),
  isExportingTaxas: PropTypes.bool,
  inserirAnexo: PropTypes.func,
  salvarTaxas: PropTypes.func,
  getConfiguracaoTaxasAtuais: PropTypes.func,
  exportarTaxas: PropTypes.func,
  limparAnexoTaxas: PropTypes.func,
  resetStore: PropTypes.func,
};

SimuladorCorporate.defaultProps = {
  isLoadingAnexo: false,
  errorMessage: null,
  dadosConvertidos: null,
  isSaving: false,
  isSaved: false,
  configuracao: {
    isLoading: false,
    error: null,
    ultimaAtualizacao: null,
    usuarioNome: null,
    vigenciaAteTaxas: null,
    vigenciaAteValoresRegistro: null,
    temDados: false,
  },
  isExportingTaxas: false,
  inserirAnexo: () => {},
  salvarTaxas: () => {},
  getConfiguracaoTaxasAtuais: () => {},
  exportarTaxas: () => {},
  limparAnexoTaxas: () => {},
  resetStore: () => {},
};

export default SimuladorCorporate;
