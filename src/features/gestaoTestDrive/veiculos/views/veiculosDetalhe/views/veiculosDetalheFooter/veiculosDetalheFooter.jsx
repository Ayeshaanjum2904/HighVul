import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import TrashIcon from 'assets/icons/trash-background';
import { makeStyles } from '@material-ui/styles';

import './veiculosDetalheFooter.scss';
import AlertModal from 'common/layout/alertModal';
import SnackbarList from 'common/snackbarList';
import EditarVeiculoButton from './editarVeiculoButton';

const useStyles = makeStyles({
  button: {
    width: '40px',
    height: '40px',
    marginLeft: '8px',
  },
});

const VeiculosDetalheFooter = ({
  hasPermissionCadastroVeiculo,
  deleteVeiculo, snackbarErrors, onSnackbarClose,
}) => {
  const classes = useStyles();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  return (
    <>
      {hasPermissionCadastroVeiculo
        ? (
          <div
            className="veiculos__modal__footer__container"
            data-cy="veiculos-modal-footer"
          >
            <EditarVeiculoButton />
            <ButtonTooltipIcon
              title="Excluir"
              className={classes.button}
              buttonAction={handleOpenDeleteModal}
            >
              <TrashIcon background="#555770" color="#E6EAF2" />
            </ButtonTooltipIcon>

          </div>
        ) : null}
      <AlertModal
        buttonAction={() => deleteVeiculo()}
        title="Deseja excluir esse veículo?"
        subtitle="Ele será excluído permanentemente."
        textRedButton="Excluir Veículo"
        openModal={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </>

  );
};

VeiculosDetalheFooter.propTypes = {
  hasPermissionCadastroVeiculo: PropTypes.bool,
  deleteVeiculo: PropTypes.func,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
};

VeiculosDetalheFooter.defaultProps = {
  hasPermissionCadastroVeiculo: false,
  deleteVeiculo: () => {},
  snackbarErrors: [],
  onSnackbarClose: () => {},
};

export default VeiculosDetalheFooter;
