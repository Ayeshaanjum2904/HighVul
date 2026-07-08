import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  gap: 16px;
`;

export const Item = styled.div`
  width: 232px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  div, span {
    margin-top: 16px;
  }
`;
