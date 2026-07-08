import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  gap: 14px;
  margin-bottom: 16px;
  padding-left: 30px; 
  padding-right: 30px;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  min-width: 0;

  & > * {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const OrdemContainer = styled(Item)`
  min-width: 218px;

  .MuiFormControl-root,
  .MuiTextField-root,
  .MuiInputBase-root {
    width: 100% !important;
  }

  .MuiInputBase-input {
    height: 40px !important;
    padding: 8px 12px !important;
    line-height: 1.2;
    border-radius: 6px !important;
  }
`;

export const StatusContainer = styled(Item)`
  min-width: 240px;

  .MuiFormControl-root,
  .MuiInputBase-root {
    width: 100% !important;
    min-width: 0 !important;
    display: flex !important;
    align-items: center !important;
    height: 40px !important;
  }

  .MuiSelect-root {
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
  }

  .MuiSelect-select {
    width: 100% !important;
    padding: 8px 12px !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    line-height: 1.2;
    border-radius: 6px !important;
  }
`;

export const ProdutoContainer = styled(Item)`
  min-width: 260px;

  .MuiFormControl-root,
  .MuiInputBase-root {
    width: 100% !important;
    min-width: 0 !important;
    display: flex !important;
    align-items: center !important;
    height: 40px !important;
  }

  .MuiSelect-root {
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
  }

  .MuiSelect-select {
    width: 100% !important;
    padding: 8px 12px !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    line-height: 1.2;
    border-radius: 6px !important;
  }
`;

export const UsuarioContainer = styled(Item)`
  min-width: 218px;

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiSelect-root {
    min-height: 40px !important;
    display: flex;
    align-items: center;
    border-radius: 6px !important;
  }

  .MuiSelect-select {
    padding: 8px 12px !important;
  }
`;

export const ButtonContainer = styled(Item)`
  flex: 0 0 100px;
  align-self: flex-end;
  height: 40px;
  margin-left: 4px;

  > button,
  .MuiButton-root {
    width: 90%;
    height: 100%;
    padding: 0;
    min-width: unset;
    border-radius: 6px !important;
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;
  max-width: 100%;

  .MuiSelect-select,
  .placeholder-new-select {
    display: block !important;
    width: 100% !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }
`;
