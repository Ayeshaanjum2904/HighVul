import styled from 'styled-components';

export const FilterRow = styled.div`
  display: grid;
  grid-template-columns: 236px 236px 236px 86px;
  grid-template-areas: "tituloMensagem periodoVigencia status buttonFilter";
  align-items: end;
  gap: 16px;

  .tituloMensagem {
    grid-area: tituloMensagem;
  }

  .periodoVigencia {
    grid-area: periodoVigencia;
  }

  .status {
    grid-area: status;
  }

  .buttonFilter {
    grid-area: buttonFilter;
  }
`;

export const BasicSelectContainer = styled.div``;

export const DateContainer = styled.div``;

export const Search = styled.div`
  min-width: 236px;
  grid-area: search;
`;

export const Container = styled.div`
  margin-bottom: 24px;
`;

export const ButtonContainer = styled.div``;

export const Apply = styled.div`
  padding-top: 37px;
  width: 86px;
  .common_filters_button {
    width: 100% !important;
    height: 40px !important;
    color: #404154 !important;

    > .common__btn__content {
        color: ${(props) => (props.diff ? 'white' : '#555770')};
    }
}
`;
