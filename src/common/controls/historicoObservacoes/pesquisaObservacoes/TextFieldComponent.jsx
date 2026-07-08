import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextField, CustomSearchRoundedIcon } from './TextFieldComponent.style';

const TextFieldComponent = ({
  value, onChange,
}) => (
  <StyledTextField
    fullWidth
    placeholder="Buscar por palavra chave, data ou usuário"
    value={value}
    onChange={onChange}
    InputProps={{ startAdornment: <CustomSearchRoundedIcon /> }}
    onKeyDown={(e) => {
      if (e.key === 'Escape') e.stopPropagation();
    }}
  />
);

TextFieldComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextFieldComponent.defaultProps = {
  value: '',
  onChange: () => {},
};

export default TextFieldComponent;
