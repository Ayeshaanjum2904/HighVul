import styled from 'styled-components';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import colors from 'assets/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow: hidden;
`;

export const LimiteRemovidoIcon = styled(WarningRoundedIcon)`
  font-size: 16px !important;
  color: ${colors.error_color_300} !important;
`;

export const LimiteModificadoIcon = styled(ErrorRoundedIcon)`
  font-size: 16px !important;
  color: ${colors.alert_color_300} !important
`;
