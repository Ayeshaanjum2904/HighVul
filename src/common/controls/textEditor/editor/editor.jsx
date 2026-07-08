import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill, { Quill } from 'react-quill';
import AlertCard from 'common/layout/alertCard/alertCard';
import { CheckCircleFilledIcon } from 'assets/icons';
import NewButton from 'common/controls/newButton/newButton';

import 'react-quill/dist/quill.snow.css';
import './editor.scss';
import Toolbar from 'common/controls/toolbar';
import { ErrorLabel } from './editor.style';

const AlignStyle = Quill.import('attributors/style/align');
Quill.register(AlignStyle, true);

const Editor = ({
  formats, text, updateValue, disabled, errorMessage, onClickSave, isBreakWord,
  openPopper, setOpenPopper, setIsSaveButtonVisible, showButtons, index, placeholder,
}) => {
  const [isModified, setIsModified] = useState(false);
  const quillRef = useRef(null);

  const modules = {
    toolbar: {
      container: `#ql-toolbar-${index}`,
      'link-tooltip': true,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
  };

  useEffect(() => {
    setIsSaveButtonVisible(isModified);
  }, [isModified]);

  const handleEditorChange = (content, delta, source) => {
    updateValue(content);
    if (source === 'user') {
      setIsModified(true);
      setOpenPopper(false);
    }
  };

  const handleUndo = () => {
    const quill2 = quillRef.current.getEditor();
    quill2.history.undo();
  };

  const handleClick = async () => {
    setIsModified(false);
    const result = await onClickSave();
    if (result) {
      setOpenPopper(true);
    }
  };

  const renderFooter = () => {
    if (isModified && showButtons) {
      return (
        <div className="botoes-condicao">
          <NewButton
            className="dark_gray_border"
            onClick={handleUndo}
          >
            <span>Reverter</span>
          </NewButton>
          <NewButton
            className="gray"
            type="submit"
            onClick={handleClick}
          >
            <span>Salvar</span>
          </NewButton>
        </div>
      );
    }
    if (openPopper) {
      return (
        <div className="alert-card-save">
          <AlertCard
            width="400px"
            title="As condições foram alteradas"
            colorBase="#206446"
            alertCardContent="8px"
            icone={<CheckCircleFilledIcon />}
            staff
          />
        </div>
      );
    }
    return (
      <div style={{ height: 40, margin: '12px 0px' }} />
    );
  };

  return (
    <>
      <Toolbar disabled={disabled} index={index} />
      <ReactQuill
        style={isBreakWord ? { wordBreak: 'break-word' } : {}}
        ref={quillRef}
        value={text}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        readOnly={disabled}
        placeholder={placeholder}
      />
      {errorMessage && <ErrorLabel>Favor inserir o assunto na mensagem</ErrorLabel>}
      {renderFooter()}
    </>
  );
};

Editor.propTypes = {
  formats: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string,
  updateValue: PropTypes.func,
  onClickSave: PropTypes.func,
  setOpenPopper: PropTypes.func,
  setIsSaveButtonVisible: PropTypes.func,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.bool,
  openPopper: PropTypes.bool,
  showButtons: PropTypes.bool,
  index: PropTypes.any,
  placeholder: PropTypes.string,
  isBreakWord: PropTypes.bool,
};

Editor.defaultProps = {
  text: '',
  updateValue: () => {},
  onClickSave: () => {},
  setOpenPopper: () => {},
  setIsSaveButtonVisible: () => {},
  disabled: false,
  errorMessage: false,
  openPopper: false,
  showButtons: false,
  index: '',
  placeholder: '',
  isBreakWord: false,
};

export default Editor;
