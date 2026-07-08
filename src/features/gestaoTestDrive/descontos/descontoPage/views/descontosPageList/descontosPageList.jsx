import React from 'react';
import PropTypes from 'prop-types';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import './descontosPageList.scss';
import MarcaBadge from 'common/views/logoMarca';
import ProdutoBadge from 'common/views/logoProduto';
import { formatDate } from 'utils/format';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import { CustomSwitch } from 'common/controls/customSwitch/customSwitch.styled';
import { Typography } from '@mui/material';
import colors from 'assets/styles/colors';

const DescontosPageList = ({
  descontos, isLoading, isError, setUpdatePage, setDuplicatePage, disableDesconto,
}) => {
  const renderDuplicateIcon = (desconto) => (
    <IconButtonTooltip
      tooltip="Duplicar"
      onClick={() => setDuplicatePage(desconto.id, desconto.marca)}
    >
      <ControlPointDuplicateIcon />
    </IconButtonTooltip>
  );
  const renderProdutoBagde = (fieldProduto) => (
    <ProdutoBadge produto={fieldProduto} />
  );
  const renderMarcaBagde = (fieldMarca) => (
    <MarcaBadge marca={fieldMarca} />
  );

  const checkedSwitch = (desconto) => (
    desconto?.status
    && Date.now() >= desconto.vigenciaInicio
    && Date.now() <= desconto.vigenciaFim
  );

  const onChangeSwitch = (desconto) => {
    disableDesconto(desconto.id);
  };

  const renderToggleStatus = (desconto) => (
    <>
      <CustomSwitch
        checked={checkedSwitch(desconto)}
        onClick={() => onChangeSwitch(desconto)}
        disabled={!checkedSwitch(desconto)}
      />
      {checkedSwitch(desconto) ? 'Ativo' : 'Inativo'}
    </>
  );

  const renderTipoBadge = (exclusiva) => (
    <span className={`tipo-badge ${exclusiva ? 'tipo-badge--exclusiva' : 'tipo-badge--global'}`}>
      {exclusiva ? 'Exclusiva' : 'Global'}
    </span>
  );

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      editable: false,
      sortable: false,
      flex: 0.3,
      minWidth: 40,
      align: 'left',
      renderCell: (param) => (
        <Typography sx={{ fontSize: '14px', color: colors.primary_color_500 }}>
          {`#${param.row?.id}`}
        </Typography>
      ),
    },
    {
      field: 'marca',
      headerName: 'Brand',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 48,
      align: 'left',
      renderCell: (param) => renderMarcaBagde(param?.value),
    },
    {
      field: 'exclusiva',
      headerName: 'Tipo',
      editable: false,
      sortable: false,
      flex: 0.7,
      minWidth: 90,
      align: 'left',
      renderCell: (param) => renderTipoBadge(param?.value),
    },
    {
      field: 'produto',
      headerName: 'Tipo de Produto',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 114,
      align: 'left',
      renderCell: (param) => renderProdutoBagde(param?.value),
    },
    {
      field: 'vigenciaInicio',
      headerName: 'Início da Vigência',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 132,
      align: 'left',
      valueFormatter: (param) => formatDate(param?.value, 'DD/MM/YYYY'),
    },
    {
      field: 'vigenciaFim',
      headerName: 'Fim da Vigência',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 122,
      align: 'left',
      valueFormatter: (param) => formatDate(param?.value, 'DD/MM/YYYY'),
    },
    {
      field: 'dveMkt',
      headerName: 'Número DVE',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'left',
    },
    {
      field: 'percentualAVista',
      headerName: 'Desconto',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 20,
      align: 'left',
      valueFormatter: (param) => `${param.value}%`,
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 100,
      align: 'center',
      type: 'actions',
      renderCell: (desconto) => renderToggleStatus(desconto.row),
    },
    {
      field: 'duplicar',
      headerName: '',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 20,
      align: 'left',
      type: 'actions',
      renderCell: (params) => renderDuplicateIcon(params.row),
    },
  ];

  return (
    <div className="descontos-page__list__container">
      <DataGrid
        footer={false}
        error={isError}
        loading={isLoading}
        columns={columns}
        rows={descontos}
        onRowClick={(param) => {
          setUpdatePage(param.id, param.row.marca);
        }}
        disableSelectionOnClick
        overlay={{
          emptyMessage: 'Nenhuma condição à vista cadastrada ainda.',
          errorMessage: 'Ocorreu um erro ao carregar as condições à vista.',
        }}
      />
    </div>
  );
};

DescontosPageList.propTypes = {
  descontos: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  setUpdatePage: PropTypes.func,
  setDuplicatePage: PropTypes.func,
  disableDesconto: PropTypes.func,
};

DescontosPageList.defaultProps = {
  descontos: null,
  isLoading: false,
  isError: false,
  setUpdatePage: () => { },
  setDuplicatePage: () => { },
  disableDesconto: () => { },
};

export default DescontosPageList;
