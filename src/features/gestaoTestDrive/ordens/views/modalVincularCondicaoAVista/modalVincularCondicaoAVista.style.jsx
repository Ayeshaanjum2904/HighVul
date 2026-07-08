import React from 'react';
import styled from 'styled-components';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const ModalContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding-bottom: 15px;
  margin-left: 24px;
  margin-top: 20px;
`;

export const ModalTitle = styled.h2`
font-weight: 900;
font-size: 24px;
line-height: 100%;
letter-spacing: 0px;
color: #555770;
margin-bottom: 15px;
margin-top: 6px;
`;

export const ModalSubtitle = styled.p`
color: #505669;
font-weight: 450;
font-size: 14px;
line-height: 24px;
letter-spacing: 0px;
margin: 0px;
`;

export const ModalHeaderIdOrdem = styled.div`
font-weight: 900;
font-size: 14px;
color: #243782;
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow: hidden;
  border-top: 1px solid #E6E8F0;
  min-height: 0;
`;

export const SituacaoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const SituacaoText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const CustomTooltip = styled.div`
  .tooltip-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    
    .tooltip-title {
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }
  }
  
  .tooltip-message {
    font-size: 13px;
    color: #666;
    line-height: 1.4;
  }
`;

export const StyledDataGrid = styled(DataGrid)`
  & .MuiDataGrid-row {
    cursor: default !important;
    
    &.invalid-condition {
      background-color: #E5E6EB !important;
      
      &:hover {
        background-color: #E5E6EB !important;
      }
    }
  }
  
  & .MuiDataGrid-cell {
    cursor: default !important;
  }
`;

export const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#FFF5E9',
    color: '#333',
    maxWidth: 280,
    fontSize: '13px',
    border: '1px solid #C76800',
    borderRadius: '8px',
    padding: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
}));
