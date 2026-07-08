import styled from 'styled-components';

export const ModalContent = styled.div`
max-height: 90vh;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 8px;
overflow: hidden;
`;

export const ModalHeader = styled.div`
padding: 16px 32px;
border-bottom: 1px solid #E5E6EB;
`;

export const ModalHeaderSubtitle = styled.div`
color: #505669;
font-size: 14px;
font-weight: 450;
line-height: 24px;
padding-bottom: 10px;
`;

export const ModalHeaderTitle = styled.div`
color: #555770;
font-size: 24px;
font-weight: 900;
line-height: 24px;
`;

export const ModalHeaderIdOrdem = styled.div`
margin-top: 4px;
font-weight: 900;
font-size: 14px;
color: #243782;
`;

export const ModalBody = styled.div`
flex: 1;
min-height: 0;
display: flex;
flex-direction: column;
gap: 16px;
padding: 0 32px 24px;
overflow-y: auto;
> *:first-child {
  margin-top: 24px;
}
&::-webkit-scrollbar { width: 8px; }
&::-webkit-scrollbar-track { background: #D9D9D9; border-radius: 8px; }
&::-webkit-scrollbar-thumb { background: #848484; border-radius: 8px; }
`;

export const FormRow = styled.div`
display: flex;
flex-direction: row;
gap: 16px;
width: 100%;
align-items: flex-start;
`;

export const FormColumn = styled.div`
flex: 1;
display: flex;
flex-direction: column;
width: 100%;
`;

export const FormTextContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
width: 100%;
margin-top: 6px;
`;

export const DownloadButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
padding: 12px 16px;
background-color: white;
border: 1px solid #304AAF;
border-radius: 4px;
color: #304AAF;
font-size: 14px;
font-weight: 500;
cursor: pointer;
transition: all 0.2s ease;
width: 260px;
height: 40px;
margin-top: 24px;

&:hover {
  background-color: rgba(66, 99, 235, 0.05);
}

svg {
  color: #304AAF;
}
`;

export const FirstRowGroup = styled.div`
display: flex;
flex-direction: column;
`;

export const AlertMessage = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-left: 276px;
max-width: 450px;
font-size: 12px;
color: #505669;
height: 20px;
background-color: #FFBE7814;
padding: 20px 12px;
border-radius: 4px;
visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
span {
  font-size: 16px;
}
`;

export const ModalFooter = styled.div`
padding: 16px 24px;
display: flex;
align-items: center;
justify-content: flex-end;
border-top: 1px solid rgba(85, 87, 112, 0.1);
gap: 12px;
`;

export const ButtonVoltar = styled.div`
> button {
  padding: 10px 24px;
  background-color: white;
  border: 1px solid #304AAF;
  border-radius: 4px;
  color: #304AAF;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: none;

  &:hover {
    background-color: rgba(48, 74, 175, 0.04);
    border-color: #304AAF;
  }

  &:active {
    background-color: rgba(48, 74, 175, 0.08);
  }
}
`;

export const DatePickerWrapper = styled.div`
position: relative;
width: 240px;
margin-bottom: 20px;
margin-top: 2px;
`;

export const TextFilterWrapper = styled.div`
position: relative;
width: 260px;
margin-bottom: 20px;
margin-top: 6px;
`;

export const TextFilterProdutoWrapper = styled.div`
position: relative;
width: 200px;
margin-bottom: 20px;
margin-top: 6px;
.MuiInputBase-root.Mui-disabled {
  background-color: rgba(229, 230, 235, 0.36);
}
`;

export const RELATORIO_BUTTON_SX = {
  border: '1px solid #304AAF',
  borderRadius: '4px',
  color: '#304AAF',
  padding: '10px 24px',
  height: '40px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  '&:hover': { border: '1px solid #304AAF', backgroundColor: 'rgba(48,74,175,0.04)' },
};

export const SUBMIT_BUTTON_SX = {
  borderRadius: '4px',
  padding: '10px 24px',
  height: '40px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  backgroundColor: '#304AAF',
  color: '#fff',
  '&:hover': { backgroundColor: '#2539A0' },
  '&.Mui-disabled': { backgroundColor: '#EEEEEE', color: '#9CA3AF' },
};
