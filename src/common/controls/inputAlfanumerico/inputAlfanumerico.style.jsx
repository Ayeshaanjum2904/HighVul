import styled from 'styled-components';
import colors from 'assets/styles/colors';

const validatedBackgroundInput = ({ focusedInput, disabledInput }) => {
  if (focusedInput) {
    return colors.input_background;
  }
  if (disabledInput) {
    return 'none';
  }
  return colors.input_background;
};

const validatedColorLabel = ({ errorInput, disabledInput, labelColor }) => {
  if (errorInput) {
    return colors.error_color_300;
  }
  if (labelColor) {
    return labelColor;
  }
  if (disabledInput) {
    return colors.icon_color;
  }
  return colors.secundary_color_700;
};

export const InputContainer = styled.div`
  font-size: 11px;
  color: ${colors.secundary_color_700};
  width: 100%;
`;

export const LabelContainer = styled.div`
  margin-bottom: 5px;
  margin-left: 5px;
  text-align: left;
  color: ${validatedColorLabel};
  font-family: CircularStd, sans-serif;
  font-size: ${(props) => props.labelFontSize || '12px'};
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const InputWrapper = styled.div`
  grid-area: box;
  margin-left: -8px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
`;

export const StyledInputField = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-end;
  padding: 8px 12px;
  border-radius: 4px;
  background: ${validatedBackgroundInput};
  height: 40px;
  border: ${(props) => (props.errorInput ? `1px solid ${colors.error_color_300}` : 'none')};
  
  &:hover {
    background: ${(props) => (props.disabledInput ? 'none' : colors.input_background)};
  }
  
  input {
    width: 100%;
    padding: 0;
    background-color: transparent;
    border: none;
    font-family: CircularStd, sans-serif;        
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: ${colors.secundary_color_700};
    
    &::placeholder {
      color: ${colors.secundary_color_300};
    }
    
    &:hover::placeholder {
      color: ${colors.secundary_color_300};
    }
    
    &:disabled::placeholder {
      color: ${colors.icon_color};
    }
    
    &:focus {
      outline: none;
      color: ${colors.icon_color};
    }
    
    &:hover {
      color: ${colors.icon_color};
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 11px;
  margin-left: 8px;
  margin-top: 1px;
  color: ${colors.error_color_300};
  display: block;
`;
