import styled from 'styled-components';
import Button from 'common/controls/button';

export const CancelarPedidosContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CancelarPedidosButton = styled(Button)`
  background-color: white;
  color: #304AAF;
  border: 1px solid #304AAF;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: background-color 0.2s ease, opacity 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? 'white' : 'rgba(48, 74, 175, 0.08)')};
    border-color: ${(props) => (props.disabled ? '#304AAF' : '#1e3a8a')};
  }

  &:focus {
    outline: none;
    background-color: rgba(48, 74, 175, 0.16);
    border-color: #1e3a8a;
    box-shadow: 0 0 0 2px rgba(48, 74, 175, 0.3);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #9e9e9e;
    border-color: #e0e0e0;
  }
`;
