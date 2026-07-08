import styled, { css } from 'styled-components';
import colors from 'assets/styles/colors';

export const Container = styled.div`
  height: 40px;

  ${(props) => props.disabled && css`
    pointer-events: none;
    cursor: default;
    background-color: ${colors.secundary_color_100_48};
    margin-bottom: 4px;
  `}
`;
