import {
  IconButton,
  ListSubheader, Menu, MenuItem, TextField, styled,
} from '@mui/material';
import { withTransientProps } from 'utils/styled';

export const CustomListSubheader = styled(ListSubheader)`
  padding: 0px !important;
`;

export const AllItem = styled('span')`
  font-family: CircularStd, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #555770;
`;

export const TextFieldComponent = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      borderColor: '#C5CEE0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00AFAD',
      backgroundColor: 'rgba(85, 87, 112, 0.08)',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontFamily: 'CircularStd, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#555770',
  },
});

export const MenuCustomComponent = styled(Menu)({
  '& .MuiList-root': {
    padding: '0px',
  },
  PaperProps: {
    style: {
      marginTop: '10px',
      overflow: 'hidden',
    },
  },
});

export const MenuItemCustomComponent = styled(MenuItem)({
  whiteSpace: 'unset',
  borderBottom: '1px solid #EDF1F7',
  display: 'flex !important',
  justifyContent: 'left !important',
  padding: '8px 16px !important',
  gap: '9px !important',
  '&:hover': {
    backgroundColor: '#F7F9FC',
    borderBottom: '1px solid #C5CEE0',
    '.all-item': {
      color: '#404154',
    },
  },
  '&.Mui-disabled': {
    opacity: 0.8,
  },
});

export const IconButtonCustomComponent = styled(IconButton, withTransientProps)(({ ...props }) => ({
  borderRadius: 4,
  width: '24px',
  height: '24px',
  color: props.$color ?? '',
  ...(props.$isOpen
    ? {
      backgroundColor: '#E5E6EB8F',
      '&:hover': {
        backgroundColor: '#E5E6EB7A',
      },
      '&:active': {
        borderRadius: 4,
      },
    }
    : {}),
}));
