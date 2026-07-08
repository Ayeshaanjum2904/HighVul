import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "menu content";
`;

export const MenuContainer = styled.div`
  grid-area: menu;
  width: 218px;
`;

export const ContentContainer = styled.div`
  grid-area: content;
  overflow: hidden;
`;
