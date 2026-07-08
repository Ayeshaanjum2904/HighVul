import styled from 'styled-components';

export const ButtonContainer = styled.div`
  flex: 0 0 ${({ isFilterApplied }) => (isFilterApplied ? '130px' : '100px')};
  align-self: flex-end;
  height: 40px;
  margin-left: 4px;

  > button,
  .MuiButton-root {
    width: 100%;
    height: 100%;
    padding: 0;
    min-width: unset;
    border-radius: 6px !important;
  }
`;
