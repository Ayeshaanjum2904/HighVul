import styled from 'styled-components';
import Button from 'common/controls/button';

export const ReprovarAnaliseCreditoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ReprovarAnaliseCreditoButton = styled(Button)`
  background-color: white;
  color: #505669;
  border: 1px solid #505669;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: background-color 0.2s ease, opacity 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? 'white' : 'rgba(80, 86, 105, 0.08)')};
    border-color: ${(props) => (props.disabled ? '#505669' : '#3f4552')};
  }

  &:focus {
    outline: none;
    background-color: rgba(80, 86, 105, 0.16);
    border-color: #3f4552;
    box-shadow: 0 0 0 2px rgba(80, 86, 105, 0.3);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #9e9e9e;
    border-color: #e0e0e0;
  }
`;
