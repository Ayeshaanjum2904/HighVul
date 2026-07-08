import styled from 'styled-components';

export const PageList = styled.div`
  grid-area: list;
  height: 100%;
  min-width: 760px;
`;

export const PageFilters = styled.div`
  grid-area: filters;
  padding-left: 32px;
`;

export const PageAreas = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto 1fr;
  grid-template-areas: 
  "description"
  "filters"
  "list";
`;

export const Description = styled.div``;

export const Text = styled.span`
  padding-left: 48px;
  width: 351px;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  color: #7A7C9A;
  font-size: 12px;
  font-style: normal;
  line-height: 16px;
`;
