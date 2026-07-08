import React from 'react';
import PropTypes from 'prop-types';

import TextEditor from 'common/controls/textEditor';

const InputCondicoes = ({
  condicao, setCondicao, setUpdateCondicao, enviarProposta, updateCondicaoVersoes,
  idLimite, idVersao, openPopper, setOpenPopper,
  setIsModified, isModal, index,
}) => {
  const currentCondicao = condicao?.find((item) => item.idVersao === idVersao)?.condicao || '';

  const handleUpdateCondicao = (updatedValue) => {
    setCondicao(idVersao, updatedValue);
  };

  const handleSaveCondicao = async () => {
    setUpdateCondicao(true);
    const result = await enviarProposta(idLimite, null);
    setOpenPopper(result);
  };

  const handleSaveCondicaoModificada = async () => {
    setUpdateCondicao(true);
    await updateCondicaoVersoes(idLimite, idVersao);
  };
  return (
    <TextEditor
      isBreakWord
      corpo={currentCondicao}
      updateValue={handleUpdateCondicao}
      label=""
      onClickSave={isModal ? handleSaveCondicaoModificada : handleSaveCondicao}
      setOpenPopper={setOpenPopper}
      openPopper={openPopper}
      setIsSaveButtonVisible={setIsModified}
      showButtons
      index={index}
    />
  );
};

InputCondicoes.propTypes = {
  setCondicao: PropTypes.func,
  enviarProposta: PropTypes.func,
  setUpdateCondicao: PropTypes.func,
  setOpenPopper: PropTypes.func,
  setIsModified: PropTypes.func,
  updateCondicaoVersoes: PropTypes.func,
  condicao: PropTypes.arrayOf(
    PropTypes.shape({
      idVersao: PropTypes.number,
      condicao: PropTypes.string,
    }),
  ),
  idLimite: PropTypes.number,
  idVersao: PropTypes.number,
  openPopper: PropTypes.bool,
  isModal: PropTypes.bool,
  index: PropTypes.string,
};

InputCondicoes.defaultProps = {
  setCondicao: () => { },
  setUpdateCondicao: () => { },
  enviarProposta: () => { },
  setOpenPopper: () => { },
  setIsModified: () => { },
  updateCondicaoVersoes: () => { },
  condicao: [],
  idLimite: 0,
  idVersao: 0,
  openPopper: false,
  isModal: false,
  index: '',
};

export default InputCondicoes;
