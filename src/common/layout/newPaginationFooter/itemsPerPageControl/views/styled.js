import styled, { css } from 'styled-components';
import colors from 'assets/styles/colors';

export const OuterContainer = styled.div`
  display: flex;
  border-radius: 4px;
  background: rgba(228, 233, 242, 0.24);
  border: solid 1px ${colors.secundary_color_100};
  width: 116px;
  height: 40px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  outline: none;
  &:hover {
    background: ${colors.secundary_color_100_36};
  }
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: ${(props) => (props.disabled ? `${colors.secundary_color_400} !important` : `${colors.secundary_color_700}`)};
  background: ${(props) => (props.disabled ? `${colors.secundary_color_100_24} !important` : '#FFFFFF')};
  ${(props) => props.disabled && css`
    pointer-events: none;
  `}
  ${(props) => props.isActive && css`
    background: ${colors.secundary_color_600_16} !important;
    color: ${colors.secundary_color_800} !important;
    font-weight: 500;
  `}
`;

export const LeftContainer = styled(MiddleContainer)`
  border-radius: 4px 0px 0px 4px;
  border-right: solid 1px ${colors.secundary_color_100};
`;

export const RightContainer = styled(MiddleContainer)`
  border-radius: 0px 4px 4px 0px;
  border-left: solid 1px ${colors.secundary_color_100};
`;
