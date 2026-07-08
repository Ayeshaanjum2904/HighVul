import { React } from 'react';
import PropTypes from 'prop-types';
import { Divider, Stack } from '@mui/material';
import './infoCadastroList.scss';
import FieldDocumento from '../fieldDocumento';

const InfoCadastroList = ({
  listaPessoaDocumentacao, listToExclude, invalidarDocumento,
  deletarDocumento, indexPessoa, editMode,
}) => {
  const renderItem = (text, item) => (
    <div className="modal-cadastro__content__documentos_itens">
      <span className="modal-cadastro__content__documentos__text-label">{text}</span>
      <div className="modal-cadastro__content__documentos__text-info">{item}</div>
    </div>
  );

  const getDocumento = (tipoDocumento, isCadastro = false) => {
    const documentoList = isCadastro
      ? listaPessoaDocumentacao?.documentosCadastro
      : listaPessoaDocumentacao?.documentos;

    const indexDocumento = documentoList?.findIndex(
      (d) => d.nomeDocumento === tipoDocumento,
    );

    if (indexDocumento >= 0) {
      return {
        ...documentoList[indexDocumento],
        indexDocumento,
        indexPessoa,
      };
    }

    return null;
  };

  const renderItemContent = (tipoDocumento, index) => {
    const documentosCadastroList = listaPessoaDocumentacao?.documentosCadastro;
    const documentoCadastro = documentosCadastroList?.some(
      (doc) => doc.nomeDocumento === tipoDocumento,
    );
    return (
      <div
        key={index}
        className={`modal-cadastro__content__documentos ${documentoCadastro ? 'cadastro' : ''}`}
      >
        {renderItem('Nome do documento', tipoDocumento)}
        {documentoCadastro && (
          <div className="field-documento-wrapper">
            <FieldDocumento
              documento={getDocumento(tipoDocumento, true)}
              isCadastro
              label="Documento cadastro"
            />
            <FieldDocumento
              invalidarDocumento={invalidarDocumento}
              deletarDocumento={deletarDocumento}
              documento={getDocumento(tipoDocumento)}
              editMode={editMode}
              tipoDocumento={tipoDocumento}
            />
          </div>
        )}
        {!documentoCadastro && (
          <FieldDocumento
            invalidarDocumento={invalidarDocumento}
            deletarDocumento={deletarDocumento}
            documento={getDocumento(tipoDocumento)}
            editMode={editMode}
            tipoDocumento={tipoDocumento}
          />
        )}
      </div>
    );
  };

  return (
    <Stack paddingRight="16px">
      <div className="modal-cadastro__content__sections">
        {listaPessoaDocumentacao.pessoaDocumentacao.tipoDocumento
          ?.filter((item) => !listToExclude.includes(item))
          .map((item, index) => (
            <>
              {renderItemContent(item, index, false)}
              <Divider />
            </>
          ))}
      </div>
    </Stack>
  );
};

InfoCadastroList.propTypes = {
  listaPessoaDocumentacao: PropTypes.object,
  listToExclude: PropTypes.array,
  invalidarDocumento: PropTypes.func,
  deletarDocumento: PropTypes.func,
  indexPessoa: PropTypes.number.isRequired,
  editMode: PropTypes.bool,
};

InfoCadastroList.defaultProps = {
  listaPessoaDocumentacao: {},
  listToExclude: [],
  invalidarDocumento: () => { },
  deletarDocumento: () => {},
  editMode: false,
};

export default InfoCadastroList;
