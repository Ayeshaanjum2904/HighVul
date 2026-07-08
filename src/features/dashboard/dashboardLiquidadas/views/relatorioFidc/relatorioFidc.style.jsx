import styled from 'styled-components';

export const PageAreas = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 24px 60px 60px;
  grid-row-gap: 16px; 
  grid-template-areas: 
  "description"
  "filters"
  "buttons";
`;

export const Description = styled.div`
  grid-area: description;
  padding-top: 12px;
  padding-left: 8px;
  color: #7A7C9A;
  font-size: 14px;
  font-weight: 450;
  line-height: 24px;
  letter-spacing: 0px;
`;

export const Filters = styled.div`
  grid-area: filters;
  padding-top: 20px;
`;

export const Buttons = styled.div`
  grid-area: buttons;
  padding-top: 16px;
`;
