import React from 'react';
import PropTypes from 'prop-types';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import MarcaBadge from 'common/views/logoMarca';
import ProdutoBadge from 'common/views/logoProduto';
import { formatDate } from 'utils/format';
import './condicoesPageList.scss';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import { CustomSwitch } from 'common/controls/customSwitch/customSwitch.styled';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@mui/material';
import colors from 'assets/styles/colors';

const CondicoesPageList = ({
  condicoes,
  isLoading,
  isError,
  setUpdatePage,
  setDuplicatePage,
  disableCondicao,
}) => {
  const checkedSwitch = (condicao) => (
    condicao?.status === 1
    && Date.now() >= condicao.vigenciaInicio
    && Date.now() <= condicao.vigenciaFim
  );

  const onChangeSwitch = (condicao) => {
    disableCondicao(condicao.id);
  };

  const renderToggleStatus = (condicao) => (
    <>
      <CustomSwitch
        checked={checkedSwitch(condicao)}
        onClick={() => onChangeSwitch(condicao)}
        disabled={!checkedSwitch(condicao)}
      />
      {checkedSwitch(condicao) ? 'Ativo' : 'Inativo'}
    </>
  );

  const renderDuplicateIcon = (condicao) => (
    <IconButtonTooltip
      tooltip="Duplicar"
      onClick={() => setDuplicatePage(condicao.id, condicao.marca)}
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

  const renderTipoBadge = (exclusiva) => (
    <span className={`tipo-badge ${exclusiva ? 'tipo-badge--exclusiva' : 'tipo-badge--global'}`}>
      {exclusiva ? 'Exclusiva' : 'Global'}
    </span>
  );

  const formatConditionDetails = (condicao) => {
    const conditions = [
      {
        header: 'D%',
        value: condicao.percentualFinanciado || 0,
      },
      {
        header: 'NºP',
        value: condicao.parcelas || 0,
      },
      {
        header: 'T%',
        value: condicao.taxa || 0,
      },
      {
        header: 'PV',
        value: condicao.prazo || 0,
      },
      {
        header: 'C',
        value: condicao.coeficiente || 0,
      },
      {
        header: 'C.O',
        value: condicao.condicaoOperacional || '',
      },
    ];

    return (
      <div className="condicoes-details">
        <div className="condicoes-grid">
          {conditions.map((condition, index) => (
            <div className="condicao-column" key={index}>
              <div className="condicoes-headers">{condition.header}</div>
              <Tooltip title={`${condition.value}`} placement="bottom">
                <div className="condicoes-values">{condition.value}</div>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      editable: false,
      sortable: false,
      flex: 0.2,
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
      flex: 0.4,
      minWidth: 50,
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
      headerName: 'Produto',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 100,
      align: 'left',
      renderCell: (param) => renderProdutoBagde(param?.value),
    },
    {
      field: 'vigenciaInicio',
      headerName: 'Início da Vigência',
      editable: false,
      sortable: false,
      flex: 1.0,
      minWidth: 60,
      align: 'left',
      valueFormatter: (param) => formatDate(param?.value, 'DD/MM/YYYY'),
    },
    {
      field: 'vigenciaFim',
      headerName: 'Fim da Vigência',
      editable: false,
      sortable: false,
      flex: 1.0,
      minWidth: 60,
      align: 'left',
      valueFormatter: (param) => formatDate(param?.value, 'DD/MM/YYYY'),
    },
    {
      field: 'numeroCartaDoMes',
      headerName: 'Carta do mês',
      editable: false,
      sortable: false,
      flex: 0.7,
      minWidth: 100,
      align: 'left',
    },
    {
      field: 'condicoes',
      headerName: 'Condições',
      editable: false,
      sortable: false,
      flex: 1.9,
      minWidth: 200,
      align: 'left',
      renderCell: (param) => formatConditionDetails(param.row),
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'center',
      type: 'actions',
      renderCell: (param) => renderToggleStatus(param.row),
    },
    {
      field: 'duplicar',
      headerName: '',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 60,
      align: 'center',
      type: 'actions',
      renderCell: (params) => renderDuplicateIcon(params.row),
    },
  ];

  return (
    <div className="condicoes-page__list__container">
      <DataGrid
        footer={false}
        error={isError}
        loading={isLoading}
        columns={columns}
        rows={condicoes}
        onRowClick={(param) => {
          setUpdatePage(param.id, param.row.marca);
        }}
        disableSelectionOnClick
        overlay={{
          emptyMessage: 'Nenhuma condição comercial cadastrada ainda.',
          errorMessage: 'Ocorreu um erro ao carregar as condições comerciais.',
        }}
      />
    </div>
  );
};

CondicoesPageList.propTypes = {
  condicoes: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  setUpdatePage: PropTypes.func,
  setDuplicatePage: PropTypes.func,
  disableCondicao: PropTypes.func,
};

CondicoesPageList.defaultProps = {
  condicoes: null,
  isLoading: false,
  isError: false,
  setUpdatePage: () => { },
  setDuplicatePage: () => { },
  disableCondicao: () => { },
};

export default CondicoesPageList;
