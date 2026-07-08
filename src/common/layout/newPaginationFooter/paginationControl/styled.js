import styled from 'styled-components';
import colors from 'assets/styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Indicator = styled.div`
  padding: 4px 16px 0 16px;
  font-size: 14px;
  line-height: 1.71;
  color: ${colors.secundary_color_700};
  font-weight: 400;
`;
