import styled from 'styled-components';

const HeaderFilterStyle = styled.div`
  .header{
    width: 100%;
    display: grid;
    align-items: end;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr auto auto;
    grid-template-areas:
      "search marca data-aprov botoes-filtro botao-criar-comunicado";

    .search { 
      grid-area: search; 
    }
    .data-aprov { 
      grid-area: data-aprov;
    }
    .botao-filtrar { 
      grid-area: botao-filtrar;
    }
    .botoes-acao {
      display: flex;
      justify-content: flex-start;
      gap: 16px;
      grid-area: botoes-acao;
    }
    .marca{ 
        grid-area: marca 
      }
    .botao-criar-comunicado{
      grid-area: botao-criar-comunicado; 
    }
    .botoes-filtro { 
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 16px;
      grid-area: botoes-filtro;
    }
  }
`;

export default HeaderFilterStyle;
