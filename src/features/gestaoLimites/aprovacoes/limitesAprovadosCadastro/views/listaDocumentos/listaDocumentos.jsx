import { React, useState } from 'react';
import PropTypes from 'prop-types';

import colors from 'assets/styles/colors';
import Loading from 'common/layout/loading';
import AlertModalInput from 'common/layout/alertModalInput';
import AlertFilledIcon from 'assets/icons/alert-filled';
import InfoCadastroList from './infoCadastroList/infoCadastroList';

const ListaDocumentos = ({
  listaPessoaDocumentacao, deletePessoaDocumentacao, isLoading, idLimite, invalidarDocumento,
}) => {
  const [openModalInvalidacao, setOpenModalInvalidacao] = useState(false);
  const [motivo, setMotivo] = useState(false);
  const [documento, setDocumento] = useState(null);

  const handleInvalidarDocumento = (documentoPessoa, nomeLista, nomeDocumento) => {
    setDocumento({
      ...documentoPessoa, nomeLista, nomeDocumento, idLimite,
    });
    setOpenModalInvalidacao(true);
  };

  const handleSalvarMotivo = () => {
    const motivoWithLineBreaks = motivo.replace(/\n/g, '<br />');
    invalidarDocumento(documento, motivoWithLineBreaks, () => setOpenModalInvalidacao(false));
  };

  const handleDeletePessoaDocumentacao = (idPessoa) => {
    deletePessoaDocumentacao(idPessoa, idLimite);
  };

  return (
    isLoading
      ? (
        <div style={{ padding: '24px' }}>
          <Loading />
        </div>
      )
      : (
        <div>
          {listaPessoaDocumentacao?.map((item, index) => (
            <InfoCadastroList
              key={index}
              indexPessoa={index}
              listaPessoaDocumentacao={item}
              removeButtonClick={
                () => handleDeletePessoaDocumentacao(item.pessoaDocumentacao.idPessoaDocumentacao)
              }
              invalidarDocumento={(documentoPessoa) => handleInvalidarDocumento(
                documentoPessoa,
                item.pessoaDocumentacao.nome,
                item.pessoaDocumentacao.tipoDocumento[0].text,
              )}
            />
          ))}
          <AlertModalInput
            openAlertModalInput={openModalInvalidacao}
            setOpenAlertModalInput={setOpenModalInvalidacao}
            buttonAction={handleSalvarMotivo}
            title="Deseja deletar o anexo enviado pelo dealer?"
            subtitle="Para prosseguir com a ação é necessário informar o motivo
              da exclusão do documento. Será enviada uma atualização para o dealer"
            alertCardTitle="É necessário inserir um motivo da exclusão documento."
            icone={<AlertFilledIcon width="8" height="8" />}
            placeholder="Insira o motivo do parecer (obrigatório) *"
            inputValue={motivo}
            setInputValue={setMotivo}
            colorBase={colors.error_color_300}
          />
        </div>
      )
  );
};

ListaDocumentos.propTypes = {
  listaPessoaDocumentacao: PropTypes.array,
  deletePessoaDocumentacao: PropTypes.func,
  invalidarDocumento: PropTypes.func,
  isLoading: PropTypes.bool,
  idLimite: PropTypes.number,
};

ListaDocumentos.defaultProps = {
  listaPessoaDocumentacao: [],
  deletePessoaDocumentacao: () => {},
  invalidarDocumento: () => {},
  isLoading: false,
  idLimite: null,
};

export default ListaDocumentos;
