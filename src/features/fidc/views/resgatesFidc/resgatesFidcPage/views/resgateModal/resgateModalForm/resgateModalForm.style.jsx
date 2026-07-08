import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  padding: 20px 40px 25px 40px;
  border-bottom: solid 1px rgba(85, 87, 112, 0.08);
  row-gap: 18px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "value";
`;

export const Header = styled.div`
  grid-area: header;
  padding-left: 8px;
  font-size: 14px;
  color: #3C414E;
  font-weight: bold;
`;

export const Value = styled.div`
  grid-area: value;
  color: #505669;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: 24px;
  margin-left: 8px;
`;
