import styled from 'styled-components';

const RagioGroupStyle = styled.div`
  .tipo-pessoa{
    display: flex;
    flex-direction: column;
    width: 205px;
    &_label{
      font-family: CircularStd, sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      color: #505669;
      margin-bottom: 6px;
      margin-left: 12px;
    }
    &_error{
      font-family: CircularStd, sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: #C31E10;
      margin-left: 8px;
    }
  }
  .container{
    border: ${(props) => (props.isError ? '1px solid #C31E10' : 'none')};
    border-radius: ${(props) => (props.isError ? '4px' : 'none')};
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    gap: 8px;
    background: rgba(229, 230, 235, 0.24);
    height: 40px;
    align-items: center;
    padding-left: 8px;
    &_label{
      font-family: CircularStd, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: #505669;
    }
  }
`;

export default RagioGroupStyle;
