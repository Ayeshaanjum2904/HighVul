import styled from 'styled-components';

export const TextFormatContainer = styled.div` 
  grid-area: box;
  white-space:nowrap;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #555770;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap; 
  max-width: 100%;
`;
