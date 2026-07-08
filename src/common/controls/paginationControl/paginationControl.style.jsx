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
`;

export const PageControlSelector = styled.div`
  background-color: rgba(228, 233, 242, 0.24);
  border-radius: 3px;
  border:solid 1px #e4e9f2;
  height: 40px;
  display: flex;
`;
