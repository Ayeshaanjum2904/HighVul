import React from 'react';
import PropTypes from 'prop-types';

import { configUpdateAction, Pages } from 'features/gestaoCobrancas/redux/enums';
import { camelFormat, formatCnpj } from 'utils/format';

import DataGrid from 'common/layout/dataGrid/dataGrid';
import { CustomSwitch } from 'common/controls/customSwitch/customSwitch.styled';
import { InfoIconTooltip } from 'common/controls/infoIconTooltip/infoIconTooltip';

const GruposPageList = ({
  grupos, isLoading, isError,
  page, ipp, totalItems, setPage, setIpp, updateConfig, setGruposPage,
}) => {
  const renderCustomHeader = (column, tooltip) => (
    <>
      <span style={{ paddingLeft: 8 }}>{column}</span>
      <InfoIconTooltip title={tooltip} />
    </>
  );

  const renderCustomSwitch = (param, config) => (
    <CustomSwitch
      onClick={() => updateConfig(config, param.row)}
      checked={param.value}
    />
  );

  const columns = [
    {
      field: 'nomeConta',
      headerName: 'Nome da Conta',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 130,
      align: 'left',
      valueFormatter: (param) => camelFormat(param.value, 2),
    },
    {
      field: 'cnpj',
      headerName: 'Cnpj',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 140,
      align: 'left',
      valueFormatter: (param) => formatCnpj(param.value),
    },
    {
      field: 'emailSupervisor',
      headerName: 'E-mail Supervisor',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 130,
      align: 'left',
    },
    {
      field: 'regional',
      headerName: 'Regional',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 98,
      align: 'left',
      valueFormatter: (param) => camelFormat(param.value, 2),
    },
    {
      field: 'marca',
      headerName: 'Brand',
      editable: false,
      sortable: false,
      flex: 0.7,
      minWidth: 74,
      align: 'left',
    },
    {
      field: 'statusVendaDireta',
      headerName: 'VD',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 58,
      align: 'left',
      headerAlign: 'left',
      type: 'actions',
      renderHeader: () => renderCustomHeader('VD', 'Ative ou desative o envio de email Venda Direta por grupo.'),
      renderCell: (param) => renderCustomSwitch(param, configUpdateAction.gruposAlterarVd),
    },
    {
      field: 'statusFloorPlan',
      headerName: 'FP',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 58,
      align: 'left',
      headerAlign: 'left',
      type: 'actions',
      renderHeader: () => renderCustomHeader('FP', 'Ative ou desative o envio de email Floor Plan por grupo.'),
      renderCell: (param) => renderCustomSwitch(param, configUpdateAction.gruposAlterarFp),
    },
    {
      field: 'statusFidc',
      headerName: 'FIDC',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 58,
      align: 'left',
      headerAlign: 'left',
      type: 'actions',
      renderHeader: () => renderCustomHeader('FIDC', 'Ative ou desative o envio de email FIDC por grupo.'),
      renderCell: (param) => renderCustomSwitch(param, configUpdateAction.gruposAlterarFidc),
    },

  ];
  return (
    <DataGrid
      error={isError}
      loading={isLoading}
      columns={columns}
      rows={grupos}
      onRowClick={(param) => setGruposPage(Pages.detalheGrupo, param.row)}
      disableSelectionOnClick
      overlay={{
        emptyMessage: 'Nenhum grupo foi encontrado.',
        errorMessage: 'Ocorreu um erro ao carregar os grupos.',
      }}
      footer={{
        ipp,
        page,
        totalItems,
        setIpp,
        setPageFetch: setPage,
      }}
    />
  );
};

GruposPageList.propTypes = {
  grupos: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
  updateConfig: PropTypes.func,
  setGruposPage: PropTypes.func,
};

GruposPageList.defaultProps = {
  grupos: null,
  isLoading: false,
  isError: false,
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
  updateConfig: () => {},
  setGruposPage: () => {},
};

export default GruposPageList;
