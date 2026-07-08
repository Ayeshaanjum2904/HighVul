import { React, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import SummaryPage from 'common/controls/summaryPage';
import DocumentoCadastroForm from './documentosCadastroForm';
import DocumentosCadastroItem from './docmumentosCadastroItem';
import ButtonDocument from '../buttonDocument';

const DocumentosCadastro = ({ idLimite, documentosCadastro, permissionList }) => {
  const [openFormCreate, setOpenFormCreate] = useState(false);
  const [openFormEdit, setOpenFormEdit] = useState(false);

  const isEmpty = useMemo(
    () => !documentosCadastro || documentosCadastro.length === 0,
    [documentosCadastro],
  );

  return (
    <Box gap="16px" paddingRight="16px" marginTop="8px">
      <SummaryPage level={0} title="Documentos do cadastro">
        { (openFormCreate || isEmpty) && (
        <DocumentoCadastroForm
          enabled={!permissionList.isGestaoJuridico}
          hideCloseButton={isEmpty}
          defaultValues={{ idLimitesAprovadosHub: idLimite }}
          closeForm={() => setOpenFormCreate(false)}
        />
        )}
        { !isEmpty && (
        <>
          { documentosCadastro?.map((doc, index) => (
            <DocumentosCadastroItem
              key={index}
              index={index}
              item={{ ...doc, indexPessoa: index }}
              openFormCreate={openFormCreate}
              openFormEdit={openFormEdit}
              setOpenFormEdit={setOpenFormEdit}
              idLimite={idLimite}
            />
          ))}
          { !permissionList.isGestaoJuridico && (
          <Box padding="8px" alignSelf="flex-end">
            <ButtonDocument
              onClick={setOpenFormCreate}
              preventAction={openFormCreate || openFormEdit}
            />
          </Box>
          )}
        </>
        )}
      </SummaryPage>
    </Box>
  );
};

DocumentosCadastro.propTypes = {
  idLimite: PropTypes.number,
  documentosCadastro: PropTypes.array,
  permissionList: PropTypes.object,
};

DocumentosCadastro.defaultProps = {
  idLimite: 0,
  documentosCadastro: [],
  permissionList: null,
};

export default DocumentosCadastro;
