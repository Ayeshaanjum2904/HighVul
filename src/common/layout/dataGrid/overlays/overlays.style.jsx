import styled from '@emotion/styled';

export const AlertContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div:first-of-type {
    margin-bottom: ${(props) => props.marginBottom};
  }
`;
