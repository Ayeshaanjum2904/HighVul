import React from 'react';
import colors from 'assets/styles/colors';
import styled, { css } from 'styled-components';

import { CheckCircleRounded, CancelRounded, InfoRounded } from '@material-ui/icons';

const baseIcon = css`
  font-size: 24px !important;
  color: inherit;
`;

export const SuccessIcon = styled(CheckCircleRounded)`
  ${baseIcon}
`;

export const ErrorIcon = styled(CancelRounded)`
  ${baseIcon}
`;

export const InfoIcon = styled(InfoRounded)`
  ${baseIcon}
`;

export const snackbarTypes = {
  error: { color: colors.error_color_300, icon: <ErrorIcon /> },
  success: { color: colors.success_color_300, icon: <SuccessIcon /> },
  info: { color: colors.primary_color_500, icon: <InfoIcon /> },
};

export const SnackbarItemContainer = styled.div`
  min-width: 300px;
  padding: 20px 16px 16px 16px;
  margin-bottom: 20px;

  color: ${(props) => (props.color)};
  background-color: #ffffff;
  border-bottom: 4px solid;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.14);
  outline: none;

  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
  pointer-events: auto;
`;

export const SnackbarText = styled.span`
  font-size: 14px;
  font-weight: 450;
  line-height: 24px;
  color: ${colors.secundary_color_700};
`;
