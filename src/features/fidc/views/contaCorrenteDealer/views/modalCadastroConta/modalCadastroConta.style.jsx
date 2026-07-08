import styled from 'styled-components';

export const ModalContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(85, 87, 112, 0.1);
`;

export const ModalHeaderTitle = styled.div`
  height: 116px;
  padding: 34px 38px 0px 38px;
  color: #3C414E;
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
`;

export const ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 34px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 0;
`;

export const CnpjField = styled.div`
  width: 210px;
  margin-top: -2px;
`;

export const NomeField = styled.div`
  width: 300px;
`;

export const BrandField = styled.div`
  width: 259px;
  margin-top: -2px;
`;

export const BancoField = styled.div`
  width: 254px;
`;

export const AgenciaField = styled.div`
  width: 255px;
  margin-left: 8px;
`;

export const ContaField = styled.div`
  width: 258px;
`;

export const ModalFooter = styled.div`
  height: 56px;
  padding: 16px 34px 24px 34px;
  display: flex;
  align-items: center;
`;

export const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;

export const TextContainer = styled.div`
flex: 1;
max-width: 50%;
padding-right: 16px;
`;

export const FooterText = styled.p`
margin: 0;
color: #505669;
font-size: 14px;
`;

export const ButtonsContainer = styled.div`
display: flex;
gap: 16px;
justify-content: flex-end;
flex: 1;
max-width: 50%;
`;

export const CadastrarButton = styled.div`
> button {
  width: 528px;
  height: 38px;
  background: #243782;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: #E5E6EB;
    color: #3C414E;
    cursor: not-allowed;
  }
}
`;

export const EditarButton = styled.div`
> button {
  width: 158px;
  height: 38px;
  background: #243782;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: #E5E6EB;
    color: #3C414E;
    cursor: not-allowed;
  }
}
`;

export const CancelarButton = styled.div`
> button {
  width: 100px;
  height: 38px;
  background: #fff;
  color: #3C414E;
  font-size: 14px;
  border: 1px solid #3C414E;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: none;
  
  &:hover {
    background: #fff;
    color: #3C414E;
    border: 1px solid #3C414E;
  }
}
`;
