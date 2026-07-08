import { IconButton } from '@mui/material';

import { withTransientProps } from 'utils/styled';
import styled from '@emotion/styled';

export const CustomIconButton = styled(IconButton, withTransientProps)((props) => ({
  borderRadius: props.$borderRadius,
  padding: props.$padding,
  color: props.$color,
  backgroundColor: props.$isActive ? props.$background : null,

  '&:hover': {
    backgroundColor: props.$hoverBackground,
  },
  '&:active': {
    backgroundColor: props.$activeBackground,
  },
  '& svg': {
    fontSize: props.$fontSize,
  },
  '& .MuiTouchRipple-root .MuiTouchRipple-child': {
    borderRadius: props.$borderRadius,
  },
}));
