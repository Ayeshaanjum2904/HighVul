import React from 'react';
import PropTypes from 'prop-types';
import { TextFormatContainer } from './textFormat.styled';

const TextFormat = ({
  concessionariaNome, label,
}) => (
  <>
    <div className="common__form-input__container-label">
      {label}
    </div>
    <TextFormatContainer title={concessionariaNome}>
      {concessionariaNome}
    </TextFormatContainer>
  </>
);

TextFormat.propTypes = {
  concessionariaNome: PropTypes.string,
  label: PropTypes.string,
};

TextFormat.defaultProps = {
  concessionariaNome: '',
  label: '',
};

export default TextFormat;
