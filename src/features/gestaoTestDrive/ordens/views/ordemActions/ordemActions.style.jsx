import styled, { createGlobalStyle } from 'styled-components';

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  
  .MuiPaper-root {
    width: auto !important;
    min-width: 200px !important;
  }
`;

export const OrdemActionsGlobalStyle = createGlobalStyle`
  #more-menu .MuiMenu-paper {
    width: auto !important;
    min-width: 220px !important;
  }
  #more-menu .MuiMenuItem-root {
    white-space: nowrap !important;
  }

  .modal .modal-header .message .header {
    margin-bottom: 0px !important;
  }
  .modal .modal-header .message .subtitle {
    margin-bottom: 0px !important;
  }
  .modal .modal-body {
    margin-bottom: 14px !important;
  }
`;
