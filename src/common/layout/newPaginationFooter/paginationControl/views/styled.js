import { ChevronLeft, ChevronRight } from 'react-feather';
import styled, { css } from 'styled-components';
import colors from 'assets/styles/colors';

export const OuterContainer = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: rgba(228, 233, 242, 0.24);
  border:solid 1px ${colors.secundary_color_100};
  height: 40px;
  font-size: 14px;
  line-height: 16px;
`;

export const PageNumber = styled.div`
  width: 38px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${colors.secundary_color_700};
  background: #FFFFFF;
  cursor: default;
`;

const baseContainer = css`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  color: ${(props) => (props.disabled ? '#C5CEE0 !important' : '#7A7C9A')};
  :hover {
    color: #555770;
  }
`;

export const LeftContainer = styled.div`
  ${baseContainer}
  border-right: solid 1px ${colors.secundary_color_100};
`;

export const RightContainer = styled.div`
  ${baseContainer}
  border-left: solid 1px ${colors.secundary_color_100};
`;

const baseArrow = css`
  width: 18px;
  height: 18px;
  color: inherit;
`;

export const LeftArrow = styled(ChevronLeft)`
  ${baseArrow}
`;

export const RightArrow = styled(ChevronRight)`
  ${baseArrow}
`;

export default OuterContainer;
