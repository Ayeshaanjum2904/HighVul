import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  border-right: 1px solid rgba(85, 87, 112, 0.1);

  display: grid;
  grid-area: content;
  grid-template-rows: 131px minmax(0, 1fr) 56px;
  grid-template-areas:
    "header"
    "body"
    "footer";
`;

export const Header = styled.div`
  grid-area: header;
  padding: 37px 40px 0 40px;
  border-bottom: 1px solid rgba(85, 87, 112, 0.1);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 57px 32px;
  grid-template-areas:
    "title"
    "status";
`;

export const HeaderTitle = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  color: #555770;
  font-size: 24px;
  font-weight: bold;
`;

export const HeaderId = styled.div`
  padding-top: 3px;
  color: #243782;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: 24px; 
`;

export const HeaderStatusBar = styled.div`
  display: flex;
  grid-area: status;
  align-self: self-end;
`;

export const Body = styled.div`
  grid-area: body;
  height: 100%;
`;

export const Footer = styled.div`
  grid-area: footer;
  border-top: 1px solid rgba(85, 87, 112, 0.1);
  padding: 8px 40px 8px 40px;
`;
