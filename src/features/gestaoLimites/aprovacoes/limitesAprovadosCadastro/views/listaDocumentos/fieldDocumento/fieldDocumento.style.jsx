import styled, { css } from 'styled-components';
import colors from 'assets/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-basis: calc(100% + 140px);
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
  padding-bottom: 8px;
  margin-left: 12px;
`;

const baseField = css`
  display: flex;
  padding: 8px 12px;
  border-radius: 4px;
  background: ${colors.secundary_color_100_24};
  margin-bottom: 4px;
  margin-left: 6px;
  font-family: CircularStd, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.secundary_color_700};
  width: 100%;
`;

export const Field = styled.div`
  ${baseField};
  cursor: pointer;
  ${(props) => !props.validated && css`
    padding: 6px 10px !important;
    border: solid 2px ${colors.terciary_color_600};
  `};
`;

export const FieldEmpty = styled.div`
  ${baseField};
`;

export const NomeDocumento = styled.span`
  text-decoration: underline;
  color: ${colors.process_color_300};
`;

export const TamanhoDocumento = styled.span`
  text-decoration: underline;
  color: ${colors.secundary_color_800};
  white-space: pre-wrap;
`;

export const DownloadIcon = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 24px;
  margin-left: 12px;
  align-items: center;
`;
