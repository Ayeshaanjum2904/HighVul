import Button from 'common/controls/button';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 40px;
  column-gap: 8px;
  grid-template-areas: "disable . button1";
`;

export const DisableResgate = styled.div`
  grid-area: disable;

  .MuiFormControlLabel-label {
    color: #404154;
    font-size: 14px;
    font-style: normal;
    line-height: 24px;
  }
`;

export const ButtonContainer = styled.div`
  grid-area: button1;
`;

export const ButtonCopy = styled(Button)`
  width: 150px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '0px')};
`;
