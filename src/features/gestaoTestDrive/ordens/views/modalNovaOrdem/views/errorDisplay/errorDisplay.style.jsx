import styled from 'styled-components';

export const ErrosWrapper = styled.div`
  margin-top: 8px;
`;

export const ALERT_SX = {
  backgroundColor: '#FEF8EB',
  mb: 1.5,
  alignItems: 'center',
  borderRadius: '8px',
  padding: '8px 16px',
  '& .MuiAlert-icon': {
    color: '#66470F',
    padding: 0,
    marginRight: '16px',
    '& svg': { fontSize: '24px' },
  },
  '& .MuiAlert-message': {
    padding: 0,
    flexGrow: 1,
    color: '#66470F',
    fontWeight: 450,
    fontSize: '14px',
    lineHeight: '20px',
  },
};

export const TITULO_SX = {
  fontSize: '16px',
  fontWeight: 500,
  color: '#282B34',
  paddingTop: '5px',
  paddingBottom: '8px',
  position: 'sticky',
  top: 0,
  zIndex: 2,
  backgroundColor: '#fff',
};

export const TABLE_CONTAINER_SX = {
  borderRadius: '8px',
  overflow: 'visible',
};

export const TABLE_SX = {
  borderCollapse: 'separate',
};

export const HEADER_CELL_SX = {
  fontSize: '10px',
  textTransform: 'uppercase',
  fontWeight: 500,
  letterSpacing: '0.08em',
  color: '#424242',
  backgroundColor: '#fff',
  position: 'sticky',
  top: '37px',
  zIndex: 1,
};

export const BODY_ROW_SX = { height: '56px' };

export const BODY_CELL_SX = { fontSize: '14px' };
