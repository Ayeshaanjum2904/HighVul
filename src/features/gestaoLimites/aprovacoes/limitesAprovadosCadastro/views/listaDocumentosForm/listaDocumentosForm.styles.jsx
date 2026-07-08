import styled from 'styled-components';

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100% - 16px);
  height: fit-content;
  border: 1px solid rgba(229, 230, 235, 1);
  border-radius: 4px;
  padding: 12px;
  margin-top: 24px;

  .form-doc{
    &_header{
      h1{
        font-family: CircularStd, sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        color: #3C414E;
        margin-left: 12px;
      }
      h3{
        font-family: CircularStd, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 15px;
        text-align: left;
        color: #505669;
        margin-left: 12px;
      }
    }
    &_dados{
      display: flex;
      flex-direction: row;
      width: 100%;
      gap: 16px;
      margin-bottom: 16px;
    }
    &_seletores{
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      gap: 16px;
      &_button{
        width: 40px;
        height: 40px;
        margin-bottom: 24px;
      }
    }
    &_plus{
      display: flex;
      align-items: center;
      padding: 12px;
      border: 1px solid rgba(36, 55, 130, 1);
      border-radius: 4px;
    }
    &_observacoes{
      display: flex;
      flex-direction: column;
      &_label{
        font-family: CircularStd, sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        color: #3C414E;
        margin-left: 12px;
      }
    }
  }

  .form-buttons{
    display: flex;
    gap: 12px;
    margin-top: 16px;
  }
`;

export default FormStyle;
