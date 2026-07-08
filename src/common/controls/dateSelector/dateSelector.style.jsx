import styled from 'styled-components';
import colors from 'assets/styles/colors';

const validatedBorderInput = ({ invalidStartDate, invalidEndDate }) => {
  if (invalidStartDate || invalidEndDate) {
    return '1px solid #DE1932';
  }
  return 'none';
};

const backgroundColorInput = ({
  focusedInput, invalidStartDate, invalidEndDate, startDate, endDate,
}) => {
  if (focusedInput || invalidStartDate || invalidEndDate || startDate || endDate) {
    return 'rgba(85, 87, 112, 0.08)';
  }

  return 'rgba(228, 233, 242, 0.24)';
};

const getColorSelectedLabel = colors.secundary_color_700;

const getColorTitle = ({
  invalidDateProp,
  dateSelectorNullable,
  shouldBeNull,
}) => {
  if (dateSelectorNullable && !shouldBeNull) return '#A3190E';
  if (invalidDateProp) return '';
  return '#505669';
};

export const FieldContainer = styled.div``;

const NewDatepicker = styled.data`
  .CalendarDay__selected_span {
    background-color: ${(props) => (props.startDate && props.endDate ? `${colors.primary_color_100_36} !important` : 'white')};
    color: ${(props) => (props.startDate && props.endDate ? ' #2A2B38 !important' : '#555770 !important')};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: end;
  padding-right: 32px;
  height: 36px;
`;

export const Button = styled.button`
  padding: 4px;
  color: ${(props) => (props.backgroundColor ? colors.primary_color_800 : '#A6A8BB')};
  border: none;
  cursor: ${(props) => (props.backgroundColor ? 'pointer' : 'default')};
  &:hover {
    border-radius: 4px;
    background: ${(props) => (props.backgroundColor ? colors.primary_color_100 : 'white')};
  }
`;

export const VerticalLine = styled.div`
  border-left: 1px solid rgba(85, 87, 112, 0.12);
  height: 100%;
  margin-left: 3px;
`;

export const ContainerDate = styled.div`
  position: ${(props) => (props.positionFixed ? 'fixed' : 'absolute')};
  border: 1px solid #e4e7e7;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px rgba(166, 171, 189, 0.25);
  border-radius: 4px;
  background: white;
  display:flex;
  flex-direction: column;
  margin-top: ${((props) => (props.marginTop ? '0px' : '16px'))};
  align-items: center;
  z-index: 2000;
  font-weight: 500;
  margin-top: 16px;
  transform: ${(props) => (props.openCopy ? 'translateX(0%)' : 'translateX(-34%)')};
  > div:first-child {
     height: 310px !important;
  }
`;

export const InputContainer = styled.div`
  display:grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 0fr 1fr 0.1fr;
  grid-template-areas: "inicio traco fim botao";
  grid-gap: 2px;
  background: ${backgroundColorInput};
  border-radius: 4px;
  align-items: center;
  min-width: 180px;
  border: ${validatedBorderInput};
  ${(props) => (props.dateSelectorNullable && !props.shouldBeNull)
    && `
      border: 1px solid var(--brand-function-error-400, #A3190E) !important;
      background: rgba(229, 230, 235, 0.36) !important;
  `}
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  padding: 0;
  font-family: CircularStd, sans-serif !important;
  font-style: normal !important;
  font-weight: 400;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 16px;
  text-align: center;
  background: rgba(228,233,242,0);
  color: #555770;
  ::placeholder {
    color: ${getColorSelectedLabel}
  }
`;

export const ButtonCalendar = styled.button`
  display: flex;
  align-items: center;
  padding: none !important;
  margin-right: 10px;
  &:disabled {
    cursor: default;
  }
`;

export const InputDate = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: ${(props) => (props.paddingLeft ?? '0px')};
  border: none;
  text-decoration: underline;
  text-decoration-color: ${getColorSelectedLabel};
`;

export const Title = styled.p`
  margin: 0 0 3px 0;
  font-family: CircularStd, sans-serif;
  font-size: 11px;
  line-height: 1.33;
  color: ${getColorTitle};
  flex-grow: 0;
  flex-basis: 50%;
  margin-bottom: 4px;
  margin-left: 8px;
`;

export const InputError = styled.p`
  margin-top: 6px;
  font-family: CircularStd, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #DE1932;
  margin-left: 8px;
  margin-bottom: 0px !important;
  position: absolute;
`;

export default NewDatepicker;
