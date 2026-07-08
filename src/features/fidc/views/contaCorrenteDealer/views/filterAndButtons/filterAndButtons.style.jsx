import styled from 'styled-components';

export const FilterRow = styled.div`
  display: grid;
  margin-bottom: 30px;
  grid-template-columns: 260px 86px 150px 150px;
  grid-template-areas: "cnpjFilter buttonFilter buttonExport buttonCadastrar";
  align-items: end;
  gap: 24px;

  .cnpjFilter {
    grid-area: cnpjFilter;
  }

  .buttonFilter {
    grid-area: buttonFilter;
  }

  .buttonExport {
    grid-area: buttonExport;
  }

  .buttonCadastrar {
    grid-area: buttonCadastrar;
  }
`;

export const Search = styled.div`
  width: 260px;
  grid-area: cnpjFilter;
`;

export const CadastrarButton = styled.div`
  grid-area: buttonCadastrar;
   > button {
    width: 150px;
    height: 40px;
  }
`;
export const ExportButton = styled.div`
  grid-area: buttonExport;
  > button {
    width: 150px;
    height: 40px;
    background: #fff !important;
    border: 1px solid #304AAF !important;
    color: #304AAF !important;
    transition: background 0.2s, color 0.2s;
  }
  > button:hover {
    background: #f5f6fa !important;
    color: #304AAF !important;
  }
`;

export const Apply = styled.div`
  padding-top: 37px;
  width: 86px;
`;
