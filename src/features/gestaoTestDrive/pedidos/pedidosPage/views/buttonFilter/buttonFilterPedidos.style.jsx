import styled from 'styled-components';
import Button from 'common/controls/button';

export const StyledFilterButton = styled(Button)`
  background-color: #505669;
  font-weight: 500;
  color: white;
  height: 40px;
  width: 100%;
  
  &:hover {
    background-color: #3C414E;
    color: white;
  }

  &:focus {
    background-color: #282B34;
    color: white;
  }
  
  &:disabled {
    cursor: default;
    background-color: #E5E6EB;
    color: #3C414E;
  }
`;
