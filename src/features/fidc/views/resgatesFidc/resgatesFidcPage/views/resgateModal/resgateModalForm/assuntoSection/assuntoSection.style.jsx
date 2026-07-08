import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  padding: 20px 40px 25px 48px;
  border-bottom: solid 1px rgba(85, 87, 112, 0.08);
  row-gap: 28px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "titulo"
    "mensagem";
`;

export const Header = styled.div`
  grid-area: header;
  font-size: 14px;
  color: #3C414E;
  font-weight: bold;
`;

export const Title = styled.div`
  grid-area: titulo;
  .common__form-input__container {
    color: ${(props) => (props.color ? '#A3190E !important' : '')};
  };
  ${(props) => props.color
    && `
    & .MuiInput-root {
      color: #555770;
      border-radius: 4px !important;
      border: 1px solid var(--brand-function-error-400, #A3190E) !important;
      background: rgba(229, 230, 235, 0.36) !important;
    };
  `};
`;

export const ErrorLabel = styled.span`
  margin-top: 4px;
  font-size: 11px;
  color: #A3190E;
`;

export const Message = styled.div`
  grid-area: mensagem;
  .ql__common_label {
    color: ${(props) => (props.color ? '#A3190E !important' : '')}
  };
  ${(props) => props.color
    && `
    & .ql__common_editor {
      border-radius: 4px !important;
      border: 1px solid var(--brand-function-error-400, #A3190E) !important;
      background: rgba(229, 230, 235, 0.36) !important;
      height: 194px !important;
    };
  `}
`;
