import {
  React, useState, useRef, useMemo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import SummaryPage from 'common/controls/summaryPage';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import CancelScheduleSendRoundedIcon from '@mui/icons-material/CancelScheduleSendRounded';
import {
  Box, Stack, Typography,
} from '@mui/material';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import colors from 'assets/styles/colors';
import PopperComponent from 'common/controls/popperComponent/popperComponent';
import AlertCard from 'common/layout/alertCard/alertCard';
import { camelFormat } from 'utils/format';
import DocumentoCadastroEditForm from '../documentosCadastroEditForm';
import DeleteDialog from './deleteDialog/deleteDialog';

const iconButtonProps = {
  isActive: true,
  padding: '4px',
  hoverBackground: colors.secundary_color_200,
  activeBackground: colors.secundary_color_300,
};

const documentosCadastroItem = ({
  item, openFormCreate, openFormEdit,
  setOpenFormEdit, deletePessoaDocumentacao,
  idLimite, permissionList,
}) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [editButtonAnchorEl, setEditButtonAnchorEl] = useState(null);
  const [alertText, setAlertText] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const editButtonRef = useRef(null);

  const hasAnexoDealer = item?.documentos?.length;

  const pendenteEnvioDocumentos = useMemo(() => {
    if (!item?.documentos?.length) return true;
    return (item.pessoaDocumentacao.tipoDocumento.length > item.documentos.length);
  }, [item]);

  const pendenteValidacaoDocumentos = useMemo(() => item?.documentos?.some(
    (documento) => !documento.validado,
  ), [item]);

  const documentosEstaoValidados = useMemo(
    () => !pendenteEnvioDocumentos && !pendenteValidacaoDocumentos,
    [pendenteEnvioDocumentos, pendenteValidacaoDocumentos],
  );

  const handleSummaryClose = () => {
    if (isEdit) {
      setAlertText('Já existe uma lista em edição, salve ou descarte as alterações para adicionar uma nova.');
      setEditButtonAnchorEl(editButtonRef?.current);
    }
  };

  const handleDelete = () => {
    deletePessoaDocumentacao(item?.pessoaDocumentacao?.idPessoaDocumentacao, idLimite);
  };

  const handleEditButton = (event) => {
    event.stopPropagation();
    if (!openFormEdit && !openFormCreate) {
      setIsEdit(true);
      setOpenFormEdit(true);
    } else {
      setAlertText('Já existe uma lista em edição, salve ou descarte as alterações para adicionar uma nova.');
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

  useEffect(() => setOpenFormEdit(false), []);

  const handleClickAway = () => {
    setEditButtonAnchorEl(null);
    setAlertText('');
  };

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

  const baseActions = [renderEditButton(), renderDeleteButton()];

  const renderItemStatus = () => (
    <Stack columnGap="4px" alignItems="center" direction="row">
      {pendenteValidacaoDocumentos && (
      <>
        <PendingActionsRoundedIcon color="warning4" sx={{ fontSize: '16px' }} />
        <Typography variant="10_medium" fontSize={12} color="warning4.main">Pendente validação</Typography>
      </>
      )}
      {pendenteEnvioDocumentos && (
        <>
          <CancelScheduleSendRoundedIcon color="warning4" sx={{ fontSize: '16px' }} />
          <Typography variant="10_medium" fontSize={12} color="warning4.main">Pendente anexo dealer</Typography>
        </>
      )}
      {documentosEstaoValidados && (
        <>
          <CheckRoundedIcon sx={{ fontSize: '16px', color: '#06C270' }} />
          <Typography variant="10_medium" fontSize={12} color="#06C270">Validado</Typography>
        </>
      )}
    </Stack>
  );

  return (
    <>
      <SummaryPage
        level={5}
        title={camelFormat(item?.pessoaDocumentacao?.nome, 2)}
        open={openAccordion}
        preventClose={isEdit}
        preventCloseCallback={handleSummaryClose}
        handleOpenChange={setOpenAccordion}
        IconTitle={renderItemStatus()}
        actions={(openAccordion && !permissionList.isGestaoJuridico) ? baseActions : null}
      >
        <DocumentoCadastroEditForm
          enabled={isEdit && !permissionList.isGestaoJuridico}
          setEnabled={handleSetIsEdit}
          defaultValues={item.pessoaDocumentacao}
          listaPessoaDocu
          editMode={isEdit && !permissionList.isGestaoJuridico}
          dadosPessoaDocumentacao={item}
          idLimite={idLimite}
        />
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
      </SummaryPage>
      <DeleteDialog
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        onDelete={handleDelete}
        hasAnexoDealer={hasAnexoDealer}
        documento={item?.pessoaDocumentacao?.nome}
        idLimite={idLimite}
      />
    </>
  );
};

documentosCadastroItem.propTypes = {
  item: PropTypes.object,
  openFormCreate: PropTypes.bool,
  openFormEdit: PropTypes.bool,
  setOpenFormEdit: PropTypes.func,
  deletePessoaDocumentacao: PropTypes.func,
  idLimite: PropTypes.number,
  permissionList: PropTypes.object,
};

documentosCadastroItem.defaultProps = {
  item: {},
  openFormCreate: false,
  openFormEdit: false,
  setOpenFormEdit: () => { },
  deletePessoaDocumentacao: () => { },
  idLimite: 0,
  permissionList: null,
};

export default documentosCadastroItem;
