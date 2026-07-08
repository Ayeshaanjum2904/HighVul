import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './limitesAprovadosList.scss';

import DataGrid from 'common/layout/dataGrid/dataGrid';
import {
  columnCenter, columnLeftSort, columnRightSort,
} from 'common/layout/dataGrid/columns';
import {
  formatDate, formatValue, safeConcat, formatStatusLimite,
} from 'utils/format';
import { useHistory } from 'react-router';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import DealerInfo from './dealerInfo/dealerInfo';
import LimiteActions from './limiteActions';
import CellAlert from './cellAlert/cellAlert';
import ModalLimiteProposta from '../modalLimiteProposta';

const whitelistCadastroPerfilJuridico = [
  'renovacao_cadastral',
  'pendente_documentos',
  'documentos_enviados_parcialmente',
  'documentos_atualizados_dealer',
  'cadastro_atualizado',
];

const whitelistCadastro = [
  'enviado_para_cadastro',
  'pendente_documentos',
  'cadastro_atualizado',
  'documentos_enviados_parcialmente',
  'documentos_atualizados_dealer',
  'renovacao_cadastral',
];

const whitelistJuridicoPerfilFin = [
  'analise_financiamento_rede',
  'assinatura_docusign',
  'docs_juridico_atualizado_dealer',
  'docs_formalizar_atualizado_dealer',
  'docs_juridico_enviados_parcialmente',
  'docs_formalizar_enviados_parcialmente',
  'docs_formalizar_enviados_sem_retorno',
  'pendente_docs_juridico_dealer',
  'pendente_docs_formalizar_dealer',
  'docusing_docs_formalizar_sem_retorno',
];

const whitelistJuridicoPerfilJuridico = [
  'enviado_para_juridico',
  'analise_juridico',
  'atualizacao_docs_juridico',
  'docusing_docs_formalizar_sem_retorno',
  'docs_formalizar_atualizado_dealer',
  'analise_financiamento_rede',
  'pendente_docs_juridico_dealer',
  'docs_juridico_enviados_parcialmente',
  'docs_juridico_atualizado_dealer',
  'pendente_docs_formalizar_dealer',
  'docs_formalizar_enviados_parcialmente',
  'documentos_atualizados_dealer',
  'docs_formalizar_enviados_sem_retorno',
  'assinatura_docusign',
];

const whitelistJuridicoPerfilCadastro = [
  'analise_financiamento_rede',
  'analise_juridico',
  'enviado_para_juridico',
  'atualizacao_docs_juridico',
  'pendente_docs_juridico_dealer',
  'docs_juridico_enviados_parcialmente',
  'docs_juridico_atualizado_dealer',
  'pendente_docs_formalizar_dealer',
  'docs_formalizar_enviados_parcialmente',
  'docs_formalizar_atualizado_dealer',
  'docs_formalizar_enviados_sem_retorno',
  'docusing_docs_formalizar_sem_retorno',
  'assinatura_docusign',
];

const whitelistCredito = [
  'enviado_para_credito',
  'obs_do_credito',
];

const whitelistCreditoPerfilFin = [
  'obs_do_credito',
];

const getTipoLimite = (tipo) => {
  switch (tipo) {
    case 'REMOVIDO': return 'error';
    case 'MODIFICADO': return 'warning';
    case 'VÁLIDO': return 'info';
    default: return '';
  }
};

const LimitesAprovadosList = ({
  limites, isLoading, isError, page, ipp, totalItems,
  setSelectedIds, setIpp, setPageFetch, enviarProposta, setSortingOrder,
  cadastroPage, getDetalheLimite, setOpenPopperCondicao, getLimitesAprovadosSisgar,
  permissionList, userPermission,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selection, setSelection] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const getColumnVisibility = () => ({
    __check__: permissionList.isGestaoFinanciamentoRede,
    acoes: permissionList.isGestaoFinanciamentoRede
        || permissionList.isGestaoCadastro
        || permissionList.isGestaoJuridico,
  });

  const getRowTypeByPermission = (tipoLimite) => (permissionList.isGestaoFinanciamentoRede
    ? getTipoLimite(tipoLimite)
    : 'info');

  const history = useHistory();
  const navTo = (itemName) => {
    history.replace(`${itemName}`);
  };

  const redirectToJuridico = (row) => (
    whitelistJuridicoPerfilFin.includes(row.statusLimite)
    && permissionList.isGestaoFinanciamentoRede
  ) || (
    whitelistJuridicoPerfilJuridico.includes(row.statusLimite) && permissionList.isGestaoJuridico
  ) || (
    whitelistJuridicoPerfilCadastro.includes(row.statusLimite) && permissionList.isGestaoCadastro
  );

  const redirectToCredito = (row) => (
    whitelistCredito.includes(row.statusLimite) && permissionList.isGestaoCredito
  ) || (
    whitelistCreditoPerfilFin.includes(row.statusLimite) && permissionList.isGestaoFinanciamentoRede
  );

  const handleRowClick = (row) => {
    getDetalheLimite(row.idLimite, row);
    getLimitesAprovadosSisgar(row.idLimite);
    setSelectedRow(row);

    if ((whitelistCadastro.includes(row.statusLimite) && permissionList.isGestaoCadastro)
      || whitelistCadastroPerfilJuridico.includes(row.statusLimite)) {
      cadastroPage(true);
      navTo('lista-documentos');
    } else if (redirectToJuridico(row)) {
      navTo('documentos-juridico');
    } else if (redirectToCredito(row)) {
      navTo('info-credito');
    } else {
      setOpenModal(true);
    }
  };

  const handleCloseModalLimiteProposta = () => {
    setOpenPopperCondicao(false);
    setOpenModal(false);
  };

  const TooltipStatus = styled(({
    className, title, children, arrow, placement,
  }) => (
    <Tooltip title={title} classes={{ tooltip: className, arrow: 'arrow' }} arrow={arrow} placement={placement}>
      {children}
    </Tooltip>
  ))`
    color: #FFFFFF;
    font-family: CircularStd, sans-serif !important;
    font-style: normal;
    font-weight: 300 !important;
    font-size: 14px !important;
    line-height: 120%;
`;

  const statusDescriptions = {
    'Liberar para dealer': 'Aprovação aguardando análise, e liberação pelo Financiamento à Rede.',
    aguardando_aprovacao_dealer: 'Aprovação liberada, aguardando aceite ou recusa do dealer.',
    aprovacao_retida: 'Aprovação retida pelo Financiamento à Rede. Não visível para o dealer.',
    aprovacao_aceita_dealer: 'Dealer aceitou a aprovação. Financiamento a rede deve prosseguir com a formalização.',
    aprovacao_recusada_dealer: 'Dealer recusou a aprovação, mas ele pode aceitá-la a qualquer momento.',
    enviado_para_cadastro: 'Aguardando elaboração do check-list dos documentos cadastrais pelo time do cadastro.',
    renovacao_cadastral: 'Aguardando atualização cadastral pelo Dealer. Os documentos cadastrais foram solicitados em outra aprovação, não sendo necessário aqui nenhuma ação por parte do financiamento rede.',
    pendente_documentos: 'Aguardando envio de documentos pelo dealer, solicitado pelo Cadastro.',
    documentos_enviados_parcialmente: 'Dealer enviou documentação do cadastro incompleta. Aguardando documentos restantes.',
    documentos_atualizados_dealer: 'Dealer enviou a documentação completa do cadastro. Aguardando análise e validação. Caso a documentação não esteja correta, deve invalidar os documentos, e, retornar a aprovação para o dealer.',
    cadastro_atualizado: 'Documentação validada pelo Cadastro. Financiamento a rede deve prosseguir com o processo.',
    enviado_para_juridico: 'Aguardando análise e elaboração de documentos para formalização pelo Jurídico.',
    analise_financiamento_rede: 'Aguardando análise e ação do Financiamento à Rede. Necessário enviar os documentos do jurídico ao dealer, ou prosseguir com a formalização caso os documentos estejam validados pelo jurídico.',
    atualizacao_docs_juridico: 'Aguardando atualização de documentos do jurídico. Os documentos do jurídico foram solicitados em outra aprovação, não sendo necessário aqui, nenhuma ação por parte do financiamento rede.',
    pendente_docs_juridico_dealer: 'Aguardando do dealer, o envio de documentos complementares, solicitados pelo jurídico.',
    docs_juridico_enviados_parcialmente: 'Dealer enviou documentação complementar parcialmente. Aguardando documentos restantes.',
    docs_juridico_atualizado_dealer: 'Dealer enviou toda a documentação complementar solicitada pelo jurídico. Financiamento a rede deve enviar para o Jurídico, para validação, ou, invalidação, os documentos que precisam de correção, e, retornar a aprovação para o Dealer.',
    analise_juridico: 'Aguardando análise do Jurídico. O Financiamento Rede enviou os documentos complementares solicitados pelo jurídico.',
    pendente_docs_formalizar_dealer: 'Aguardando o envio de documentos para formalização pelo dealer, solicitado pelo Jurídico.',
    docs_formalizar_enviados_parcialmente: 'Dealer enviou documentação para formalização incompleta. Aguardando documentos restantes.',
    docs_formalizar_atualizado_dealer: 'Dealer enviou documentação para formalização completa. Financiamento a rede deve enviar aprovação para o Jurídico, validar, ou, caso tenha documentos incorretos, inserir observação solicitando envio correto, e, retornar com a aprovação para o dealer.',
    docs_formalizar_enviados_sem_retorno: 'Indica que o jurídico solicitou documentos para formalizar ao dealer, mas não necessita de nenhuma ação dele dentro do sistema, ou seja, o dealer vai formalizar o documento, mas não precisa de retornar um anexo, nem enviar o documento original/físico.',
    docusing_docs_formalizar_sem_retorno: 'A aprovação possui documentos Docusign e documentos que não necessitam de retorno. Não é necessária nenhuma ação do dealer no sistema. Ele deve baixar o arquivo enviado, e formalizar conforme orientações, e assinar via Docusign.',
    assinatura_docusign: 'Documentos em processo de assinatura via Docusign. Financiamento Rede deve acompanhar o processo, e garantir que todos os envolvidos assinem os documentos.',
    enviado_para_credito: 'Aguardando análise do Crédito. A aprovação foi enviada pelo Financiamento Rede.',
    obs_do_credito: 'Aguardando avaliação do Financiamento Rede sobre as observações enviadas pelo Crédito.',
    aprovacao_finalizada: 'Processo de formalização finalizado pelo Financiamento Rede após todas as etapas concluídas.',
    aprovacao_pausada: 'Indica que o processo de aprovação foi temporariamente suspenso, pelo financiamento rede, através da opção "Pausar Aprovação" no menu de ações.',
    Pendente: 'Aprovação cancelada no Sisgar. Financiamento a rede deve verificar o motivo do cancelamento junto ao crédito, registrar as informações na aprovação, e, caso necessário, cancelar a aprovação pelo menu de ações.',
    reativada_sisgar: 'Aprovação deixou de vir no arquivo do BI, e depois voltou a ser exibida. Financiamento a rede deve definir qual versão da aprovação será mantida/definida como a válida (modal de aprovações modificadas), e enviar para o setor pertinente.',
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const columns = [
    columnLeftSort({
      field: 'IdLimite',
      headerName: 'Id',
      minWidth: 70,
      flex: 0.5,
      valueGetter: (params) => params.row.idLimite,
      renderCell: ({ row }) => <CellAlert row={row} value={safeConcat('#', row.idLimite)} permissionList={permissionList} />,
    }),
    columnLeftSort({
      field: 'NomeDealer',
      headerName: 'Concessionária',
      minWidth: 140,
      renderCell: ({ row }) => <DealerInfo row={row} />,
    }),
    columnLeftSort({
      field: 'DataAprovacao',
      headerName: 'Aprovação',
      minWidth: 110,
      flex: 0.7,
      valueGetter: (params) => params.row.dataAprovacao,
      valueFormatter: ({ value }) => formatDate(value, 'DD/MM/YYYY'),
    }),
    columnLeftSort({
      field: 'DescricaoProduto',
      headerName: 'produto',
      minWidth: 100,
      flex: 0.7,
      valueGetter: (params) => params.row.descricaoProduto,
    }),
    columnRightSort({
      field: 'ValorLimite',
      headerName: 'Limite Total',
      minWidth: 120,
      flex: 0.7,
      valueGetter: (params) => params.row.valorLimite,
      renderCell: ({ row }) => (
        <CellAlert
          row={row}
          value={formatValue(row.valorLimite ?? 0)}
          isValorLimite
          permissionList={permissionList}
        />
      ),
    }),
    columnLeftSort({
      field: 'StatusLimite',
      headerName: 'Status',
      minWidth: 150,
      valueGetter: (params) => params.row.statusLimite,
      valueFormatter: ({ value }) => formatStatusLimite(value),
      renderCell: ({ value }) => {
        const description = statusDescriptions[value] || '';
        const truncatedDescription = truncateText(description, 251);

        return (
          <TooltipStatus title={(truncatedDescription)} arrow>
            <span>{formatStatusLimite(value)}</span>
          </TooltipStatus>
        );
      },
    }),
    columnCenter({
      field: 'acoes',
      headerName: 'Ações',
      type: 'actions',
      minWidth: 50,
      flex: 0.5,
      renderCell: ({ row }) => (
        <LimiteActions
          limite={row}
          enviarProposta={enviarProposta}
          iconProps={{ color: 'inherit', size: 24 }}
        />
      ),
    }),
  ];

  return (
    <>
      <DataGrid
        error={isError}
        loading={isLoading}
        columns={columns}
        rows={limites}
        rowHeight={64}
        getRowId={(row) => row.idLimite}
        checkboxSelection
        disableSelectionOnClick
        hideDisabledCheckbox
        selectionModel={selection}
        onSelectionModelChange={(newSelection) => {
          setSelection(newSelection);
          setSelectedIds(newSelection);
        }}
        columnVisibilityModel={getColumnVisibility()}
        onSort={(nome, ordem) => setSortingOrder(nome, ordem, userPermission)}
        initialState={{}}
        onRowClick={({ row }) => handleRowClick(row)}
        getRowType={(row) => getRowTypeByPermission(row.tipoLimite)}
        isRowSelectable={({ row }) => row.statusLimite === 'Liberar para dealer' && row.tipoLimite === 'VÁLIDO'}
        overlay={{
          emptyMessage: 'Nenhum limite aprovado encontrado.',
          errorMessage: 'Erro ao carregar os limites aprovados.\nPor favor, tente novamente.',
          loadingMessage: 'Estamos buscando os limites aprovados. \nAguarde um instante...',
        }}
        footer={{
          ipp,
          page,
          totalItems,
          setIpp: (items) => setIpp(items, userPermission),
          setPageFetch: (pagination) => setPageFetch(pagination, userPermission),
        }}
      />
      {openModal && (
        <ModalLimiteProposta
          open={openModal}
          handleClose={handleCloseModalLimiteProposta}
          data={selectedRow}
        />
      )}

    </>
  );
};

LimitesAprovadosList.propTypes = {
  limites: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  setSelectedIds: PropTypes.func,
  setIpp: PropTypes.func,
  setPageFetch: PropTypes.func,
  enviarProposta: PropTypes.func,
  setSortingOrder: PropTypes.func,
  cadastroPage: PropTypes.func,
  getDetalheLimite: PropTypes.func,
  getLimitesAprovadosSisgar: PropTypes.func,
  setOpenPopperCondicao: PropTypes.func,
  userPermission: PropTypes.any,
  permissionList: PropTypes.object.isRequired,
};

LimitesAprovadosList.defaultProps = {
  limites: [],
  isLoading: false,
  isError: false,
  page: 0,
  ipp: 0,
  totalItems: 0,
  setSelectedIds: () => {},
  setIpp: () => {},
  setPageFetch: () => {},
  enviarProposta: () => {},
  setSortingOrder: () => {},
  cadastroPage: () => {},
  getDetalheLimite: () => {},
  getLimitesAprovadosSisgar: () => {},
  setOpenPopperCondicao: () => {},
  userPermission: null,
};

export default LimitesAprovadosList;
