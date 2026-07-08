import styled from 'styled-components';
import colors from 'assets/styles/colors';

export const ArrowContainerExport = styled.div`
  position: absolute;
  top: 18px;
  line-height: .78;
  border-radius: 3px;
  padding: 6px 9px;
  left: ${(props) => (props.leftIcon)};
  &:hover {
    border-radius: 30px;
    background: ${colors.primary_color_100}
  }
`;
