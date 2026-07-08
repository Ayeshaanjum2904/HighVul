import styled from 'styled-components';

export const OrdensPageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ListWrapper = styled.div`
  height: 100%;
`;
export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 16px;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-left: calc(20px + (220px - 200px) / 2);
  gap: 12px;
`;
export const NovaOrdemButton = styled.div`
  grid-area: buttonNovaOrdem;
   > button {
    width: 150px;
    height: 40px;
  }
`;
