import styled from 'styled-components';

export const SimuladorWrapper = styled.div`
  .common__page-header {
    padding: 12px 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 611px;
  padding: 24px;
  padding-top: 6px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SectionTitle = styled.span`
  font-family: 'Circular Std', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #3C414E;
`;

export const SectionSubtitle = styled.span`
  font-family: 'Circular Std', sans-serif;
  font-weight: 450;
  font-size: 14px;
  line-height: 24px;
  color: #3C414E;
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const UploadInput = styled.div`
  flex: 1;
  max-width: 462px;
`;

export const UploadButton = styled.div`
  button {
    height: 40px;
    background-color: #243782;
    border-radius: 4px;
    color: #FFFFFF;
    font-family: 'Circular Std', sans-serif;
    font-weight: 500;
    font-size: 14px;

    &:disabled {
      background-color: #E5E6EB;
      color: #3C414E;
      cursor: not-allowed;
    }
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 12px;
  background-color: #E6E7EB;
  border-radius: 12px;
`;

export const InfoTitle = styled.span`
  font-family: 'Circular Std', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #3C414E;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const InfoItem = styled.span`
  font-family: 'Circular Std', sans-serif;
  font-weight: 450;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #505669;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px;
`;

export const InfoValue = styled.span`
  font-weight: 700;
  max-width: 450px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
`;

export const InfoLink = styled.button`
  font-family: 'Circular Std', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #243782;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  font-family: 'Circular Std', sans-serif;
  color: #E42313;
  margin-left: 4px;
`;

export const ErrorMessageTitle = styled.div`
  margin-top: -10px;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
`;

export const ErrorMessageSubtitle = styled.span`
  font-weight: 450;
  font-size: 12px;
  line-height: 100%;
`;
