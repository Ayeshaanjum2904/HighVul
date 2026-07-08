import styled from 'styled-components';

const HeaderFilterStyle = styled.div`
  .header{
    width: 100%;
    display: grid;
    align-items: end;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
    "search concessionaria data-aprov botoes-filtro"
    "botoes-acao botoes-acao . .";
    margin-bottom: 32px;
    padding-right: 72px;
    padding-left: 32px;

    .search { 
      grid-area: search; 
    }
    .concessionaria { 
      grid-area: concessionaria;
    }
    .data-aprov { 
      grid-area: data-aprov;
    }
    .botao-mais-filtros { 
      grid-area: botao-mais-filtros;
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
    .botoes-filtro { 
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 16px;
      grid-area: botoes-filtro;
      .show-button{
        grid-area: showButton;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        cursor: pointer;
        background: rgba(210, 217, 243, 0.24);
        &:hover {
          background: rgba(210, 217, 243, 0.56);
        }
      }

      .show-filters{
        background: rgba(210, 217, 243, 0.56);
      }
    }

    &.show-all{
      grid-template-areas:
      "search concessionaria status produto "
      "data-aprov data-venc regiao marca"
      "botoes-acao botoes-acao . botoes-filtro";

      .data-venc { 
        grid-area: data-venc 
      }
      .status { 
        grid-area: status
      }
      .produto { 
        grid-area: produto
      }
      .regiao { 
        grid-area: regiao
      }
      .marca{ 
        grid-area: marca 
      }
      .botoes-filtro { 
        justify-content: flex-end;
      }
    }
  }

`;

export default HeaderFilterStyle;
