import styled from 'styled-components';
import { Box, Button } from '@mui/material';

export const ContainerSecao = styled(Box)`
  padding: 0;
  text-align: right;
`;

export const BotaoTexto = styled(Button)`
  && {
    color: #505669;
    background-color: transparent;
    border: none;
    text-transform: none;
    font-size: 14px;
    font-weight: 400;
    min-width: auto;
    
    ${(props) => !props.$isListaAberta && `
      padding: 0;
      justify-content: flex-start;
      margin-right: 36px;
      margin-top: 24px;
      &:hover {
        background-color: transparent;
      }
    `}
    
    ${(props) => props.$isListaAberta && `
      padding: 12px 12px;
      width: 100%;
      justify-content: flex-start;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background-color: transparent;
      }
    `}
    
    &:focus {
      background-color: transparent;
    }
    
    .MuiButton-startIcon {
      margin-right: 6px;
    }
  }
`;

export const ContainerCentralizado = styled(Box)`
  padding: 0;
  text-align: right;
  color: #666;
  font-size: 14px;
`;

export const ContainerLista = styled(Box)`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: fit-content;
  white-space: nowrap;
  margin-right: 24px;
  margin-top: 11px;
  max-height: 450px;
  overflow-y: auto;
`;

export const DivisorTitulo = styled.div`
  height: 1px;
  background-color: #d0d0d0;
  margin: 0;
`;

export const ContainerVeiculos = styled(Box)`
  display: flex;
  flex-direction: column;
  max-height: 390px;
  overflow-y: auto;
`;

export const CardVeiculo = styled(Box)`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  .MuiAvatar-root {
    width: 18px;
    height: 18px;
    font-size: 10px;
  }
  
  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  
  .MuiTypography-root {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
  }
`;
