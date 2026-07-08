import styled from 'styled-components';
import Button from 'common/controls/button';

export const ExportarRelatorioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ExportarRelatorioButton = styled(Button)`
  background-color: #304AAF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background-color: #304AAF;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
  }
`;
