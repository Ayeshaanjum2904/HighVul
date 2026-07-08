import { React, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack } from '@mui/material';
import SummaryPage from 'common/controls/summaryPage';
import DocumentoFormalizarForm from './documentoFormalizarForm';
import OpenFormButton from './openFormButton/openFormButton';
import DocumentosFormalizarItem from './documentoFormalizarItem';
import { getDocumentStatus, renderStatusItens } from './documentoFormalizarStatus/statusUtils';

const DocumentosFormalizar = ({
  idLimite, documentosFormalizar, permissionList, isReadonlyStatus,
}) => {
  // TO-DO Tratamento para abrir automaticamente o colapse quando alterar a lista
  const [openFormCreate, setOpenFormCreate] = useState(false);
  const [openFormEdit, setOpenFormEdit] = useState(false);

  const isEmpty = useMemo(() => documentosFormalizar?.length === 0);

  const statusSummary = documentosFormalizar?.map(getDocumentStatus)
    .filter((status) => status !== null && status !== undefined);

  return (
    <Stack gap="16px" paddingRight="16px" marginTop="8px">
      <SummaryPage level={0} title="Documentos para formalizar" IconTitle={renderStatusItens(statusSummary)}>
        { (openFormCreate || isEmpty) && (
          <DocumentoFormalizarForm
            defaultValues={{ idLimitesAprovadosHub: idLimite }}
            closeForm={() => setOpenFormCreate(false)}
            enabled={!isReadonlyStatus}
            hideCloseButton={isEmpty}
          />
        )}
        { !isEmpty && (
          <>
            { documentosFormalizar.map((doc, index) => (
              <DocumentosFormalizarItem
                key={index}
                index={index}
                item={doc}
                openFormCreate={openFormCreate}
                openFormEdit={openFormEdit}
                setOpenFormEdit={setOpenFormEdit}
                permissionList={permissionList}
                isReadonlyStatus={isReadonlyStatus}
              />
            ))}
            {!isReadonlyStatus && (
              <Box padding="8px" alignSelf="flex-end">
                <OpenFormButton
                  onClick={setOpenFormCreate}
                  preventAction={openFormCreate || openFormEdit}
                />
              </Box>
            )}
          </>
        )}
      </SummaryPage>
    </Stack>

  );
};

DocumentosFormalizar.propTypes = {
  idLimite: PropTypes.number,
  documentosFormalizar: PropTypes.array,
  permissionList: PropTypes.object.isRequired,
  isReadonlyStatus: PropTypes.bool,
};

DocumentosFormalizar.defaultProps = {
  idLimite: 0,
  documentosFormalizar: [],
  isReadonlyStatus: false,
};

export default DocumentosFormalizar;
