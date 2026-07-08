import React from 'react';
import PropTypes from 'prop-types';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './inputChaveNF.scss';

const InputChaveNF = ({ chaveNF }) => {
  const handleCopyToClipboard = () => {
    if (chaveNF) {
      navigator.clipboard.writeText(chaveNF);
    }
  };

  const renderChaveNF = () => (
    <div className="chaveNF__container">
      <span className="chaveNF__container__span">
        Chave NF
      </span>
      <div className="chaveNF__container__data">
        <span>{chaveNF || ''}</span>
        <div
          className="chaveNF__container__copy-icon"
          onClick={handleCopyToClipboard}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCopyToClipboard();
            }
          }}
        >
          <ContentCopyIcon sx={{ fontSize: 18, color: '#555770' }} />
        </div>
      </div>
    </div>
  );

  return renderChaveNF();
};

InputChaveNF.propTypes = {
  chaveNF: PropTypes.string,
};

InputChaveNF.defaultProps = {
  chaveNF: '',
};

export default InputChaveNF;
