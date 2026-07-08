import styled from 'styled-components';

export const SnackbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 5000;

  pointer-events: none;
`;
