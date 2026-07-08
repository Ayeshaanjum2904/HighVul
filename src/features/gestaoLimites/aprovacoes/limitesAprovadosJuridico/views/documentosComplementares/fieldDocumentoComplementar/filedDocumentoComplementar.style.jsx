import styled, { css } from 'styled-components';
import colors from 'assets/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 16px);
  margin-left: 20px;
`;

export const DocumentoInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.span`
  text-align: left;
  color: ${colors.secundary_color_700};
  font-family: CircularStd, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  padding: 16px 0px 8px 0px;
`;

const baseField = css`
  display: flex;
  padding: 8px 12px;
  border-radius: 4px;
  background: ${colors.secundary_color_100_24};
  margin-bottom: 4px;
  font-family: CircularStd, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.secundary_color_700};
  width: 90%;
`;

export const Field = styled.div`
  ${baseField};
  cursor: pointer;
  padding: 6px 10px 6px 8px;
  min-width: 0;
`;

export const FieldEmpty = styled.div`
  ${baseField};
`;

export const NomeDocumento = styled.div`
  text-decoration: underline;
  color: ${colors.process_color_300};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 480px;
`;

export const TamanhoDocumento = styled.span`
  text-decoration: underline;
  color: ${colors.secundary_color_800};
  white-space: pre-wrap;
`;

export const PaperClipIcon = styled.div`
  padding-rigth: 8px;
  display: flex;
  align-items: center;
`;
