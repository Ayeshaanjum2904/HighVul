import colors from 'assets/styles/colors';
import styled from 'styled-components';

const MultSelectFormStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: ${(props) => (props.isAllSelected ? `${colors.primary_color_100_36}` : 'white')};
  border-bottom: ${(props) => (props.isAllSelected ? `1px solid ${colors.primary_color_100_56}` : `1px solid ${colors.border_color}`)};
`;

export default MultSelectFormStyle;
