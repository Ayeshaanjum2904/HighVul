import { Checkbox, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import colors from 'assets/styles/colors';
import { withTransientProps } from 'utils/styled';

const getDisabledColumns = (columnVisibilityModel) => {
  if (columnVisibilityModel) {
    const keys = Object.keys(columnVisibilityModel);
    if (keys.length) {
      return keys.filter((key) => columnVisibilityModel[key] === false)?.length || 0;
    }
  }
  return 0;
};

export const DataGridMui = styled(DataGrid)((
  {
    isRowSelectable = true,
    ...props
  },
) => ({
  '&.MuiDataGrid-root': {
    border: 'none',
  },

  '.MuiDataGrid-columnSeparator': {
    display: 'none',
  },

  '& .MuiDataGrid-sortIcon': {
    opacity: 'inherit !important',
  },

  '& .MuiDataGrid-row': {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 450,
    lineHeight: '24px',
    color: colors.secundary_color_700,
    borderBottom: `1px solid ${colors.secundary_color_100}`,
    ':hover': {
      backgroundColor: isRowSelectable ? colors.primary_color_100_16 : 'inherit',
      cursor: isRowSelectable ? 'pointer' : 'default',
      color: colors.secundary_color_800,
    },
    '&.Mui-selected': {
      pointerEvents: props.checkboxSelection ? 'auto' : 'none',
      backgroundColor: colors.primary_color_100_36,
      color: colors.secundary_color_800,
      '&:hover': {
        backgroundColor: colors.primary_color_100_36,
      },
    },
    'div[role="cell"]': {
      color: colors.secundary_color_700,
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '24px',
      padding: `0px ${props.cellPadding}px`,
      ':first-of-type': {
        paddingLeft: props.cellPaddingBorder - (props.checkboxSelection ? 8 : 0),
      },
      [`:nth-of-type(${props.columns.length - getDisabledColumns(props.columnVisibilityModel)})`]: {
        paddingRight: props.cellPaddingBorder,
      },
    },
  },

  '& .MuiDataGrid-cell': {
    borderBottom: 'none',
    ':focus-within': {
      outline: 'none !important',
    },
  },

  '& .MuiDataGrid-columnHeaders': {
    borderBottom: `1px solid ${colors.primary_color_100_48}`,
    'div[role="columnheader"]': {
      padding: `0px ${props.cellPadding - 2}px`,
      ':first-of-type': {
        paddingLeft: props.cellPaddingBorder - (props.checkboxSelection ? 10 : 2),
      },
      ':last-child': {
        paddingRight: props.cellPaddingBorder - 2,
      },
    },
  },

  '& .MuiDataGrid-columnHeader': {
    pointerEvents: 'none',
    color: colors.secundary_color_800,
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '16px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    ':focus-within': {
      outline: 'none !important',
    },
    '&--alignRight .MuiDataGrid-iconButtonContainer': {
      paddingLeft: '8px',
      paddingRight: '0px',
    },
    '&--alignCenter .MuiDataGrid-columnHeaderTitleContainer': {
      flex: 'auto',
    },
    '&--sortable .MuiDataGrid-columnHeaderTitleContainer': {
      borderRadius: '2px',
      '&:hover': {
        backgroundColor: colors.primary_color_100_16,
      },
    },
    '&--sorted .MuiDataGrid-columnHeaderTitleContainer': {
      borderRadius: '2px',
      color: `${colors.primary_color_600} !important`,
      backgroundColor: colors.primary_color_100_24,
      path: {
        color: colors.primary_color_600,
      },
      '&:hover': {
        backgroundColor: colors.primary_color_100_16,
      },
    },
    '&TitleContainer': {
      margin: '3px -8px',
      flex: 'unset',
      '&Content': {
        pointerEvents: props.loading ? 'none' : 'auto',
        height: '30px',
        padding: '0px 10px',
      },
    },
  },

  '& .MuiDataGrid-iconButtonContainer': {
    pointerEvents: props.loading ? 'none' : 'auto',
    padding: '1px 8px 1px 0px',
    visibility: 'visible',
    width: 'auto',
    button: {
      padding: '0px',
      '& .MuiTouchRipple-root': {
        display: 'none',
      },
      '&:hover': {
        backgroundColor: 'unset',
      },
      '&:active': {
        backgroundColor: 'unset',
      },
    },
  },

  '& .MuiDataGrid-footerContainer': {
    borderTop: `1px solid  ${colors.primary_color_100_48}`,
  },

  '& .CustomDataGridRowStyle--info': {
    borderBottom: `1px solid ${colors.secundary_color_100_48}`,
    '&:hover': {
      backgroundColor: colors.primary_color_100_24,
      borderBottom: `1px solid ${colors.primary_color_100_48}`,
    },
    '&.Mui-selected': {
      backgroundColor: colors.primary_color_100_36,
      '&:hover': {
        backgroundColor: colors.primary_color_100_36,
      },
    },
  },
  '& .CustomDataGridRowStyle--error': {
    backgroundColor: colors.error_color_100_16,
    borderBottom: `1px solid ${colors.error_color_100_36}`,
    '&:hover': {
      backgroundColor: colors.error_color_100_24,
    },
    '&.Mui-selected': {
      backgroundColor: colors.error_color_100_36,
      '&:hover': {
        backgroundColor: colors.error_color_100_36,
      },
    },
  },
  '& .CustomDataGridRowStyle--warning': {
    backgroundColor: colors.alert_color_100_08,
    borderBottom: `1px solid ${colors.alert_color_100_36}`,
    '&:hover': {
      backgroundColor: colors.alert_color_100_16,
    },
    '&.Mui-selected': {
      backgroundColor: colors.alert_color_100_24,
      '&:hover': {
        backgroundColor: colors.alert_color_100_24,
      },
    },
  },
}));

export const CustomCheckbox = styled(Checkbox, withTransientProps)((
  {
    ...props
  },
) => ({
  '& .MuiSvgIcon-root': {
    fontSize: 18,
  },
  '&.Mui-checked': {
    color: colors.primary_color_500,
  },
  '&.MuiCheckbox-root.Mui-disabled': {
    display: props?.$hideDisable ? 'none' : 'auto',
  },
}));
