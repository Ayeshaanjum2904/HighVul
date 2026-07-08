import styled from 'styled-components';
import colors from 'assets/styles/colors';

const AlertCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : 'white')};
  border: ${(props) => (props.colorBase ? `1px solid ${props.colorBase}` : `1px solid ${colors.error_color_100}`)};
  border-radius: 8px;
  padding: ${(props) => (props.padding ? props.padding : '')};
  height: ${(props) => (props.height ?? props.height)};
  width: ${(props) => props.width};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '12px')};
  
  .alert-card-content {
    padding: ${(props) => props.alertCardContent};
  }

  .alert-card-title {
    display: flex;
    flex-direction: row;
    gap: 8px;
    font-family: 'CircularStd', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : '24px')};
    color: ${colors.secundary_color_700};
  }

  .alert-card-subtitle{
    font-family: 'CircularStd', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: ${colors.secundary_color_700};
    margin-left: 32px;
  }
`;

export default AlertCard;
