import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import { trackedProperties } from 'modules';
import { makeStyles } from '@material-ui/core/styles';
import { Edit, Delete } from '@material-ui/icons';
import colors from 'assets/styles/colors';
import AlertModal from 'common/layout/alertModal';

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

const ContatosList = ({
  contatos,
  isLoading,
  isError,
  openEditModal,
  setContatoId,
  deleteContato,
}) => {
  const classes = useStyles();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = (contato) => {
    setOpenDeleteModal(true);
    setContatoId(contato?.id);
  };

  const columns = [
    {
      field: 'nome',
      headerName: 'Nome',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 164,
      align: 'left',
    },
    {
      field: 'papel',
      headerName: 'Papel',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 121,
      align: 'left',
      renderCell: (param) => param.row.papel.descricao,
    },
    {
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 56,
      align: 'right',
      type: 'action',
      renderCell: (param) => (
        <div className={classes.buttomContainer}>
          <ButtonTooltipIcon
            title="Editar"
            className={classes.button}
            buttonAction={() => openEditModal(param.row)}
            mixpanelTarget="Editar contato"
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
        rows={contatos}
        getRowId={(row) => row.id}
        overlay={{
          emptyMessage: 'Nenhum contato foi encontrado.',
          errorMessage: 'Ocorreu um erro ao carregar os contatos.',
        }}
        hideFooterPagination
        hideFooter
        isRowSelectable={false}
        disableSelectionOnClick
        cellPadding={105}
      />
      <AlertModal
        buttonAction={() => deleteContato()}
        title="Deseja remover o contato do grupo?"
        subtitle="O contato será removida do grupo, mas você poderá associá-lo novamente se desejar."
        textRedButton="Remover contato"
        openModal={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </>
  );
};

ContatosList.propTypes = {
  contatos: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  openEditModal: PropTypes.func,
  setContatoId: PropTypes.func,
  deleteContato: PropTypes.func,
};

ContatosList.defaultProps = {
  contatos: null,
  isLoading: false,
  isError: false,
  openEditModal: () => {},
  setContatoId: () => {},
  deleteContato: () => {},
};

export default ContatosList;
