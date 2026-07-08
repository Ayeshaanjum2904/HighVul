import {
  React, useEffect, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

import { Box, Stack, Typography } from '@mui/material';
import colors from 'assets/styles/colors';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import SummaryPage from 'common/controls/summaryPage';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import PopperComponent from 'common/controls/popperComponent/popperComponent';
import AlertCard from 'common/layout/alertCard/alertCard';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import DocumentoFormalizarForm from '../documentoFormalizarForm';
import DeleteDialog from './deleteDialog/deleteDialog';
import ValidationDialog from './validationDialog/validationDialog';
import { getDocumentStatus, renderStatusItens } from '../documentoFormalizarStatus/statusUtils';

const iconButtonProps = {
  isActive: true,
  padding: '4px',
  hoverBackground: colors.secundary_color_200,
  activeBackground: colors.secundary_color_300,
};

const DocumentosFormalizarItem = ({
  item, deleteDocumento, openFormCreate, openFormEdit, setOpenFormEdit,
  permissionList, validarDocumentoJuridico, isReadonlyStatus,
}) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openValidationDialog, setOpenValidationDialog] = useState(false);
  const [editButtonAnchorEl, setEditButtonAnchorEl] = useState(null);
  const [alertText, setAlertText] = useState('');
  const editButtonRef = useRef(null);

  const handleEditButton = (event) => {
    event.stopPropagation();
    if (!openFormEdit && !openFormCreate) {
      setIsEdit(true);
      setOpenFormEdit(true);
    } else {
      setAlertText('Já existe um documento em edição, salve ou descarte as alterações para adicionar um novo.');
      setEditButtonAnchorEl(editButtonRef?.current);
    }
  };

  const handleDeleteButton = (event) => {
    event.stopPropagation();
    setOpenDeleteDialog(true);
  };

  const handleSetIsEdit = (status) => {
    setIsEdit(status);
    setOpenFormEdit(status);
  };

  const handleSummaryClose = () => {
    if (isEdit) {
      setAlertText('Existe um documento em edição, salve ou descarte as alterações antes de realizar outra ação na página.');
      setEditButtonAnchorEl(editButtonRef?.current);
    }
  };

  const handleClickAway = () => {
    setEditButtonAnchorEl(null);
    setAlertText('');
  };

  const handleValidationJuridicoClick = (event) => {
    event.stopPropagation();
    setOpenValidationDialog(true);
  };

  useEffect(() => setOpenFormEdit(false), []);

  const hasAnexoDealer = useMemo(() => item?.listaArquivos?.some((arquivo) => arquivo?.tipo === 'dealer'), [item]);

  const ValidateButton = () => (
    <Box>
      <Stack
        columnGap="4px"
        direction="row"
        padding="4px 6px"
        borderRadius="4px"
        sx={{
          backgroundColor: item?.validado ? colors.secundary_color_100 : 'rgba(6, 194, 112, 0.08)',
          color: item?.validado ? colors.secundary_color_700 : '#06C270',
          '&:hover': {
            backgroundColor: item?.validado ? colors.secundary_color_200 : colors.success_color_100,
            cursor: 'pointer',
          },
        }}
        onClick={handleValidationJuridicoClick}
      >
        {item?.validado ? (
          <KeyboardReturnRoundedIcon sx={{ fontSize: '16px' }} />
        ) : (
          <CheckRoundedIcon sx={{ fontSize: '16px' }} />
        )}
        <Typography
          variant="10_medium"
          lineHeight="16px"
          color={item?.validado ? colors.secundary_color_700 : '#06C270'}
        >
          {item?.validado ? 'Desfazer validação' : 'Validar'}
        </Typography>
      </Stack>
    </Box>
  );

  const renderEditButton = () => (
    <Box ref={editButtonRef} key={0}>
      {isEdit ? (
        <Stack columnGap="4px" direction="row" padding="4px 6px" borderRadius="4px" sx={{ backgroundColor: colors.primary_color_100 }}>
          <EditRoundedIcon sx={{ fontSize: '16px' }} color="primary500" />
          <Typography variant="10_medium" color="primary500.main" lineHeight="16px">Em edição</Typography>
        </Stack>
      ) : (
        <IconButtonTooltip onClick={handleEditButton} tooltip="Editar" {...iconButtonProps}>
          <EditRoundedIcon />
        </IconButtonTooltip>
      )}
    </Box>
  );

  const renderDeleteButton = () => (
    <IconButtonTooltip onClick={handleDeleteButton} tooltip="Excluir" {...iconButtonProps} key={1}>
      <DeleteRoundedIcon />
    </IconButtonTooltip>
  );

  const statusSummary = getDocumentStatus(item);

  let sumarryActions = [];

  if (!isReadonlyStatus) {
    const baseActions = [renderEditButton(), renderDeleteButton()];
    const juridicoActions = [ValidateButton(), ...baseActions];
    sumarryActions = permissionList?.isGestaoJuridico === true ? juridicoActions : baseActions;
  }

  return (
    <>
      <SummaryPage
        level={5}
        title={item?.nome}
        open={openAccordion}
        preventClose={isEdit}
        preventCloseCallback={handleSummaryClose}
        handleOpenChange={setOpenAccordion}
        IconTitle={renderStatusItens(statusSummary)}
        actions={openAccordion ? sumarryActions : null}
      >
        <DocumentoFormalizarForm
          enabled={isEdit}
          setEnabled={handleSetIsEdit}
          defaultValues={item}
          editMode
        />
      </SummaryPage>
      {editButtonAnchorEl && (
        <PopperComponent anchorEl={editButtonAnchorEl} placement="left" y={20} onClickAway={handleClickAway}>
          <AlertCard
            width="100%"
            title={alertText}
            icone={<WarningRoundedIcon htmlColor={colors.error_color_300} sx={{ fontSize: '16px' }} />}
            colorBase={colors.error_color_300}
            alertCardContent="8px"
          />
        </PopperComponent>
      )}
      <DeleteDialog
        documento={item?.nome}
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        onDelete={() => deleteDocumento(item?.idLimitesAprovadosHub, item?.id)}
        hasAnexoDealer={hasAnexoDealer}
      />
      <ValidationDialog
        documento={item?.nome}
        onConfirm={
          () => validarDocumentoJuridico(item?.id, !item?.validado, item?.idLimitesAprovadosHub)
        }
        openDialog={openValidationDialog}
        setOpenDialog={setOpenValidationDialog}
        isValidation={!item?.validado}
      />
    </>
  );
};

DocumentosFormalizarItem.propTypes = {
  item: PropTypes.object,
  validarDocumentoJuridico: PropTypes.func,
  validarAnexo: PropTypes.func,
  invalidarAnexo: PropTypes.func,
  getAnexoDownload: PropTypes.func,
  uploadArquivoTemporario: PropTypes.func,
  deleteDocumento: PropTypes.func,
  permissionList: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  openFormCreate: PropTypes.bool,
  openFormEdit: PropTypes.bool,
  isReadonlyStatus: PropTypes.bool,
  setOpenFormEdit: PropTypes.func,
};

DocumentosFormalizarItem.defaultProps = {
  item: {},
  validarDocumentoJuridico: () => {},
  validarAnexo: () => {},
  invalidarAnexo: () => {},
  getAnexoDownload: () => {},
  uploadArquivoTemporario: () => {},
  deleteDocumento: () => {},
  disabled: false,
  openFormCreate: false,
  openFormEdit: false,
  isReadonlyStatus: false,
  setOpenFormEdit: () => {},
};

export default DocumentosFormalizarItem;
