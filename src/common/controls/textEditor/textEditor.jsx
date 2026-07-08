import React from 'react';
import PropTypes from 'prop-types';
import Editor from './editor';

import './textEditor.scss';

const formats = [
  'bold', 'italic', 'underline', 'background',
  'list', 'bullet', 'color', 'align',
];

const TextEditor = ({
  corpo, updateValue, label, disabled, errorMessage,
  onClickSave, openPopper, setOpenPopper, isBreakWord,
  setIsSaveButtonVisible, showButtons, index, placeholder,
}) => (
  <>
    { label && (
      <div className="ql__common_label">
        {label}
      </div>
    )}
    <div className="ql__common_editor">
      <Editor
        isBreakWord={isBreakWord}
        formats={formats}
        text={corpo}
        updateValue={updateValue}
        disabled={disabled}
        errorMessage={errorMessage}
        onClickSave={onClickSave}
        openPopper={openPopper}
        setOpenPopper={setOpenPopper}
        setIsSaveButtonVisible={setIsSaveButtonVisible}
        showButtons={showButtons}
        index={index}
        placeholder={placeholder}
      />
    </div>
  </>
);

TextEditor.propTypes = {
  corpo: PropTypes.string,
  label: PropTypes.string,
  updateValue: PropTypes.func,
  onClickSave: PropTypes.func,
  setOpenPopper: PropTypes.func,
  setIsSaveButtonVisible: PropTypes.func,
  disabled: PropTypes.bool,
  openPopper: PropTypes.bool,
  errorMessage: PropTypes.bool,
  showButtons: PropTypes.bool,
  index: PropTypes.any,
  placeholder: PropTypes.string,
  isBreakWord: PropTypes.bool,
};

TextEditor.defaultProps = {
  corpo: '',
  label: 'Texto do e-mail *',
  updateValue: () => {},
  onClickSave: () => {},
  setOpenPopper: () => {},
  setIsSaveButtonVisible: () => {},
  disabled: false,
  openPopper: false,
  errorMessage: false,
  showButtons: false,
  index: '',
  placeholder: '',
  isBreakWord: false,
};

export default TextEditor;
