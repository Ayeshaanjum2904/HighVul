import styled from 'styled-components';

const validatedBackgroundInput = ({ focusedInput, disabledInput }) => {
  if (focusedInput) {
    return 'rgba(229, 230, 235, 0.36)';
  }
  if (disabledInput) {
    return 'none';
  }
  return 'rgba(229, 230, 235, 0.24)';
};

const validatedColorLabel = ({ errorInput, disabledInput }) => {
  if (errorInput) {
    return '#C31E10';
  }
  if (disabledInput) {
    return '#555770';
  }
  return '#505669';
};

const ImputLabelError = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width};
    .label{
      text-align: left;
      color: #505669;
      font-family: CircularStd, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      margin-bottom: 4px;
      margin-left: 12px;
    }

    .error{
      text-align: left;
      color: ${validatedColorLabel};
      font-family: CircularStd, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      margin-bottom: 4px;
      margin-left: 12px;
      margin-top: 8px;
    }

    .basic-input{
      display: flex;
      align-items: center;
      align-items: flex-end;
      padding: 8px 12px;
      border-radius: 4px;
      background: ${validatedBackgroundInput};
      height: 40px;
      border: ${(props) => (props.errorInput ? '1px solid #C31E10' : 'none')};
      &:hover{
        background: ${(props) => (props.disabledInput ? 'none' : 'rgba(229, 230, 235, 0.36)')};
      }
      input{
        width: 100%;
        padding: 0;
        background-color: transparent;
        border: none;
        font-family: CircularStd, sans-serif;        
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        color: rgba(80, 86, 105);
      }
      input::placeholder {
        color: #505669;
      }

      input:hover::placeholder {
        color: #505669;
      }

      input:disabled::placeholder {
        color: #555770;
      }

      input:focus {
        outline: none;
        color: #555770;
      }

      input:hover {
        color: #555770;
      }
    }
`;

export default ImputLabelError;
