import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.isDrawerOpen ? '0 48px' : '0 96px 0 48px')};
  display: flex;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
