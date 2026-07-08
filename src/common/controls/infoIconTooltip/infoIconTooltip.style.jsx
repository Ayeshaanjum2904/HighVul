import InfoIcon from '@material-ui/icons/Info';
import { withTransientProps } from 'utils/styled';
import styled from '@emotion/styled';

export const CustomInfoIcon = styled(InfoIcon, withTransientProps)((props) => ({
  fontSize: '14px !important',
  margin: `${props.$margin} !important`,
  color: `${props.$iconColor} !important`,
}));
