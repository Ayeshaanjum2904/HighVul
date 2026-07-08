import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  padding: 20px 40px 25px 40px;
  row-gap: 8px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "titulo"
    "mensagem";
`;

export const Span = styled.span`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '0')};
  color: ${(props) => (props.color ? props.color : '#404154')};
  line-height: 24px;
  height: ${(props) => (props.height)};
`;

export const TitleEllipsis = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 620px;
    height: 23px;
    font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '0')};
    color: ${(props) => (props.color ? props.color : '#404154')};
    line-height: 24px;
`;

export const SpanContainer = styled.div``;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 722px;
  height: 292px;
  flex-shrink: 0;
  border-radius: 4px;
  padding: 14px 28px 14px 28px;
  background: #FFF;
  overflow-y: auto;
  box-shadow: 0px 4px 8px 0px rgba(85, 87, 112, 0.16), 0px 0px 2px 0px rgba(85, 87, 112, 0.08);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;
