import styled from 'styled-components';
import colors from 'assets/styles/colors';

const getColor = (props) => {
  if (props.selected) return props.colorSelected;
  if (props.isActive) return '#505669';
  return '#7C839A';
};

export const DetailsContainer = styled.details`
`;

export const DropDownLabel = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TitleDropDown = styled.span`
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  margin: ${(props) => (props.margin ? props.margin : '4px 92px 0 16px')};
`;

export const SummaryContainer = styled.summary`
  cursor: ${(props) => (props.isActive ? 'pointer' : 'default')};
  display: flex;
  height: 28px;
  padding: 18px 16px;
  border-radius: 4px;
  margin-bottom: 2px;
  color: ${getColor};
  ${(props) => props.isActive
   && `
    &:hover {
    background-color: ${colors.secundary_color_100_36};
    span {
      color: #404154;
    }
    path {
      fill: #404154;
    }
  }
`}
`;

export const Border = styled.span`
  border: ${(props) => (props.isActive ? `0.6mm solid ${props.colorSelected}` : 'none')};
  height: 20px;
  display: inline-block;
  border-top-right-radius: 80px 80px;
  border-bottom-right-radius: 80px 80px;
`;

export const SpanContainer = styled.span`
  display: contents;
  color: #555770;
`;

export const Span = styled.span`
  color: ${(props) => (props.isActive ? props.colorSelected : '#555770')};
  font-weight: 300;
  font-size: 14px;
  font-style: normal;
  margin-left: 30px;
  letter-spacing: 0.25px;
  line-height: 24px;
  text-overflow: ellipsis;
`;

export const SubMenuPadding = styled.div`
  padding: 0 0 4px 16px;
`;

export const ContainerSubmenu = styled.div`
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isActive ? `${colors.secundary_color_100}` : 'none')};
  border-radius: 4px;

  &:hover ${Border} {
    border: 0.6mm solid #555770;
    height: 20px;
    display: inline-block;
    border-top-right-radius: 80px 80px;
    border-bottom-right-radius: 80px 80px;
  }
  &:hover {
    background-color: ${colors.secundary_color_100_36};
    span {
      color: #404154;
    }
  }
`;
