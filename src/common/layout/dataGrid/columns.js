import { GRID_CHECKBOX_SELECTION_COL_DEF } from '@mui/x-data-grid';

const defaultConfig = {
  editable: false,
  sortable: false,
  flex: 1,
};
const defaultConfigSort = {
  ...defaultConfig,
  sortable: true,
};
const alignRight = {
  align: 'right',
  headerAlign: 'right',
};
const alignLeft = {
  align: 'left',
  headerAlign: 'left',
};
const alignCenter = {
  align: 'center',
  headerAlign: 'center',
};

export const columnLeft = (props) => ({
  ...defaultConfig,
  ...alignLeft,
  ...props,
});

export const columnRight = (props) => ({
  ...defaultConfig,
  ...alignRight,
  ...props,
});

export const columnCenter = (props) => ({
  ...defaultConfig,
  ...alignCenter,
  ...props,
});

export const columnLeftSort = (props) => ({
  ...defaultConfigSort,
  ...alignLeft,
  ...props,
});

export const columnRightSort = (props) => ({
  ...defaultConfigSort,
  ...alignRight,
  ...props,
});

export const columnAction = (props) => ({
  ...defaultConfig,
  type: 'actions',
  ...props,
});

export const columnCheckbox = {
  ...GRID_CHECKBOX_SELECTION_COL_DEF,
  minWidth: 36,
  maxWidth: 36,
};
