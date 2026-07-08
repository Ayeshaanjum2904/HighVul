import { React } from 'react';
import PropTypes from 'prop-types';

import { Stack } from '@mui/material';
import ReactQuill from 'react-quill';

import SendButton from './sendButton/sendButton';
import MultiplosAnexos from '../multiplosAnexos/multiplosAnexos';
import {
  formats, InputContent, InputFooter, modules,
} from './InputContainer.style';
import EnviarParaDealer from '../enviarParaDealer/enviarParaDealer';

const InputContainer = ({
  observacao, setObservacao, inputMaxLines, error, isSubmitting,
  uploadDocumento, downloadDocumento, deleteDocumento, documentos,
  control, warningDealer, setWarningDealer, isBreakWord,
}) => (
  <Stack>
    <InputContent $error={error} $inputMaxLines={inputMaxLines}>
      <ReactQuill
        style={isBreakWord ? { wordBreak: 'break-word' } : {}}
        value={observacao}
        onChange={setObservacao}
        modules={modules}
        formats={formats}
        readOnly={isSubmitting}
        placeholder="Escreva uma observação ou adicione um arquivo"
      />
    </InputContent>
    <InputFooter $error={error}>
      <MultiplosAnexos
        uploadDocumento={uploadDocumento}
        downloadDocumento={downloadDocumento}
        deleteDocumento={deleteDocumento}
        documentos={documentos}
        error={error}
      />
      <EnviarParaDealer
        control={control}
        warningDealer={warningDealer}
        setWarningDealer={setWarningDealer}
      />
      <SendButton loading={isSubmitting} />
    </InputFooter>
  </Stack>
);

InputContainer.propTypes = {
  inputMaxLines: PropTypes.number,
  observacao: PropTypes.string,
  setObservacao: PropTypes.func,
  error: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  uploadDocumento: PropTypes.func,
  downloadDocumento: PropTypes.func,
  deleteDocumento: PropTypes.func,
  documentos: PropTypes.array,
  control: PropTypes.object.isRequired,
  warningDealer: PropTypes.bool,
  setWarningDealer: PropTypes.func,
  isBreakWord: PropTypes.bool,
};

InputContainer.defaultProps = {
  inputMaxLines: 9,
  observacao: '',
  setObservacao: () => {},
  error: false,
  isSubmitting: false,
  uploadDocumento: () => {},
  downloadDocumento: () => {},
  deleteDocumento: () => {},
  documentos: [],
  warningDealer: false,
  setWarningDealer: () => {},
  isBreakWord: false,
};

export default InputContainer;
