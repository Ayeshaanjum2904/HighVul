import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import colors from 'assets/styles/colors';
import NewTextField from 'common/controls/newTextField';
import UploadDocumento from 'common/controls/fileButton/uploadDocumento';
import { convertBytesToMb } from 'utils/file';
import AlertModal from '../alertModal';

const AlertModalInput = ({
  openAlertModalInput, title, subtitle, buttonAction, alertCardTitle,
  icone, colorBase, placeholder, inputValue, setInputValue,
  setOpenAlertModalInput, closeOnSubmit, iconTitle, textRedButton,
  inputDocumento, documentoValue, setDocumentoValue, color, isLoading, isError,
}) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSetDocumento = (file) => {
    setDocumentoValue({ nome: file.name, tamanho: `${convertBytesToMb(file.size)}`, file });
  };

  const handleDocumentoErro = (error) => {
    setDocumentoValue({ ...documentoValue, isError: true, textoErro: error });
  };

  useEffect(() => {
    setInputValue('');
    setDocumentoValue(null);
  }, [openAlertModalInput]);

  const preventAction = useMemo(() => !(inputValue && inputValue.trim()), [inputValue]);

  return (
    <AlertModal
      closeOnSubmit={closeOnSubmit}
      setOpen={setOpenAlertModalInput}
      openModal={openAlertModalInput}
      title={title}
      subtitle={subtitle}
      buttonAction={buttonAction}
      preventAction={preventAction}
      alertCardTitle={alertCardTitle}
      icone={icone}
      colorBase={colorBase}
      color={color}
      limitesAprovados
      IconTitle={iconTitle}
      textRedButton={textRedButton}
      isLoadingAction={isLoading}
    >
      <>
        <NewTextField
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {inputDocumento && (
          <>
            <Box sx={{ height: 16 }} />
            <UploadDocumento
              width="380px"
              uploadDocumento={handleSetDocumento}
              deleteDocumento={() => setDocumentoValue(null)}
              setErroDocumento={handleDocumentoErro}
              documento={documentoValue}
              isLoading={isLoading}
              isError={isError}
              label="Anexo de documentos"
              placeholder="Anexar um documento"
            />
          </>
        )}
      </>
    </AlertModal>
  );
};

AlertModalInput.propTypes = {
  openAlertModalInput: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonAction: PropTypes.func,
  alertCardTitle: PropTypes.string,
  icone: PropTypes.element,
  colorBase: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  setOpenAlertModalInput: PropTypes.func,
  closeOnSubmit: PropTypes.bool,
  iconTitle: PropTypes.object,
  textRedButton: PropTypes.string,
  inputDocumento: PropTypes.bool,
  documentoValue: PropTypes.object,
  setDocumentoValue: PropTypes.func,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

AlertModalInput.defaultProps = {
  openAlertModalInput: false,
  title: '',
  subtitle: '',
  buttonAction: () => { },
  alertCardTitle: '',
  icone: null,
  colorBase: colors.alert_color_200,
  placeholder: '',
  inputValue: '',
  setInputValue: () => { },
  setOpenAlertModalInput: () => { },
  closeOnSubmit: false,
  iconTitle: undefined,
  textRedButton: undefined,
  inputDocumento: false,
  documentoValue: null,
  setDocumentoValue: () => { },
  color: undefined,
  isLoading: false,
  isError: false,
};

export default AlertModalInput;
