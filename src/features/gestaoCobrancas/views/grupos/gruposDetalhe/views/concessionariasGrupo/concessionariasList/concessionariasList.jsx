import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { camelFormat, formatCodigoConcessionaria, formatNomeConcessionaria } from 'utils/format';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import { useHistory } from 'react-router-dom';
import { trackedProperties } from 'modules';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle, Edit, Delete } from '@material-ui/icons';
import colors from 'assets/styles/colors';
import AlertModal from 'common/layout/alertModal';
import { Pages } from '../../../../../../redux/enums';

const useStyles = makeStyles(() => ({
  buttomContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.secundary_color_100_56,
      borderRadius: '4px',
    },
    '&:focus': {
      borderRadius: '4px',
      backgroundColor: colors.secundary_color_100,
      color: colors.secundary_color_800,
    },
  },
  icon: {
    fontSize: '20px',
  },
}));

const ConcessionariasList = ({
  setConcessionaria,
  concessionarias,
  isLoading,
  isError,
  openModalDetalhe,
  setConcessionariasPage,
  deleteConcessionaria,
}) => {
  const history = useHistory();
  const classes = useStyles();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = (concessionaria) => {
    setOpenDeleteModal(true);
    setConcessionaria(concessionaria);
  };

  const columns = [
    {
      field: 'nome',
      headerName: 'Nome da Conta',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 164,
      align: 'left',
      valueFormatter: (param) => formatNomeConcessionaria(param.value),
    },
    {
      field: 'codBuc',
      headerName: 'Código BUC',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 90,
      align: 'left',
      renderCell: (param) => formatCodigoConcessionaria(
        param.row?.corretorId !== 0
          ? param.row?.corretorId
          : param.row.codBuc,
      ),
    },
    {
      field: 'regional',
      headerName: 'Regional',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 100,
      align: 'left',
      valueFormatter: (param) => camelFormat(param.value, 2),
    },
    {
      field: 'brand',
      headerName: 'Brand',
      editable: false,
      sortable: false,
      flex: 0.7,
      minWidth: 52,
      align: 'left',
    },
    {
      field: 'tipo',
      headerName: 'Tipo',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 50,
      align: 'left',
    },
    {
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'right',
      type: 'action',
      renderCell: (param) => (
        <div className={classes.buttomContainer}>
          <ButtonTooltipIcon
            title="Ver mais"
            className={classes.button}
            buttonAction={() => openModalDetalhe(param.row)}
            mixpanelTarget="Preview concessionária"
          >
            <AddCircle className={classes.icon} />
          </ButtonTooltipIcon>

          <ButtonTooltipIcon
            title="Editar"
            className={classes.button}
            buttonAction={() => {
              history.push('concessionarias');
              setConcessionariasPage(Pages.detalheConcessionaria, param.row);
            }}
            mixpanelTarget="Editar concessionária"
            mixpanelPage={trackedProperties.gruposPage}
          >
            <Edit className={classes.icon} />
          </ButtonTooltipIcon>

          <ButtonTooltipIcon
            title="Excluir"
            className={classes.button}
            buttonAction={() => handleOpenDeleteModal(param.row)}
          >
            <Delete className={classes.icon} />
          </ButtonTooltipIcon>
        </div>
      ),
    },
  ];

  return (
    <>
      <DataGrid
        error={isError}
        loading={isLoading}
        columns={columns}
        rows={concessionarias}
        getRowId={(row) => row.codBuc}
        overlay={{
          emptyMessage: 'Nenhuma concessionária foi encontrada.',
          errorMessage: 'Ocorreu um erro ao carregar as concessionárias.',
        }}
        hideFooterPagination
        hideFooter
        isRowSelectable={false}
        disableSelectionOnClick
        cellPadding={32}
      />
      <AlertModal
        buttonAction={() => deleteConcessionaria()}
        title="Deseja remover a concessionária do grupo?"
        subtitle="A concessionária será removida do grupo, mas você poderá associá-la novamente se desejar."
        textRedButton="Remover concessionária"
        openModal={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </>
  );
};

ConcessionariasList.propTypes = {
  setConcessionaria: PropTypes.func,
  concessionarias: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  openModalDetalhe: PropTypes.func,
  setConcessionariasPage: PropTypes.func,
  deleteConcessionaria: PropTypes.func,
};

ConcessionariasList.defaultProps = {
  setConcessionaria: () => [],
  concessionarias: null,
  isLoading: false,
  isError: false,
  openModalDetalhe: () => [],
  setConcessionariasPage: () => [],
  deleteConcessionaria: () => [],
};

export default ConcessionariasList;
