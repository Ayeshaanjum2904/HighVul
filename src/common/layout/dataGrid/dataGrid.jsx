import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { ptBR } from '@mui/x-data-grid';
import NewPaginationFooter from '../newPaginationFooter/newPaginationFooter';

import { Empty, Error, Loading } from './overlays/overlays';
import { CustomCheckbox, DataGridMui } from './dataGrid.style';
import { columnCheckbox } from './columns';

const DataGrid = (props) => {
  const {
    columns, footer, loading, onSort, overlay, rows, getRowType, rowHeight,
    cellPadding, cellPaddingBorder, checkboxSelection, hideDisabledCheckbox,
  } = props;
  const { emptyMessage, errorMessage, loadingMessage } = overlay;

  const columnList = useMemo(() => {
    const newColumns = columns.slice();
    if (checkboxSelection) newColumns.unshift(columnCheckbox);

    return newColumns.map((column, index, { length }) => (
      index === 0 || index === length - 1
        ? {
          ...column,
          minWidth: column.minWidth
            + cellPadding
            + cellPaddingBorder
            - ((checkboxSelection && index === 0) ? 8 : 0),
        } : { ...column, minWidth: column.minWidth + (cellPadding * 2) }
    ));
  }, [columns]);

  const rowList = !loading && Array.isArray(rows) ? rows : [];

  const handleSortModelChange = useCallback((newSortModel) => {
    const model = newSortModel[0];
    onSort(model.field, model.sort);
  }, []);

  return (
    <DataGridMui
      rowHeight={rowHeight}
      headerHeight={36}
      disableColumnMenu
      disableColumnReorder
      hideFooter={!footer}
      hideFooterSelectedRowCount
      hideDisabledCheckbox={hideDisabledCheckbox}
      sortingMode="server"
      sortingOrder={['asc', 'desc']}
      onSortModelChange={handleSortModelChange}
      getRowClassName={({ row }) => `CustomDataGridRowStyle--${getRowType(row)}`}
      components={{
        Pagination: () => <NewPaginationFooter {...footer} loading={loading} isDataGrid />,
        NoRowsOverlay: () => <Empty message={emptyMessage} />,
        ErrorOverlay: () => <Error message={errorMessage} />,
        LoadingOverlay: () => <Loading message={loadingMessage} />,
        BaseCheckbox: CustomCheckbox,
      }}
      componentsProps={{ baseCheckbox: { $hideDisable: hideDisabledCheckbox } }}
      {...props}
      columns={columnList}
      rows={rowList}
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
    />
  );
};

DataGrid.propTypes = {
  ...DataGridMui.propTypes,
  footer: PropTypes.shape(NewPaginationFooter.propTypes),
  onSort: PropTypes.func,
  overlay: PropTypes.shape({
    emptyMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    loadingMessage: PropTypes.string,
  }),
  rowHeight: PropTypes.number,
  cellPadding: PropTypes.number,
  cellOuterPadding: PropTypes.number,
  hideDisabledCheckbox: PropTypes.bool,
  getRowType: PropTypes.func,
  dataCy: PropTypes.string,
};

DataGrid.defaultProps = {
  ...DataGridMui.defaultProps,
  footer: NewPaginationFooter.defaultProps,
  onSort: () => {},
  overlay: {},
  rowHeight: 56,
  cellPadding: 16,
  cellPaddingBorder: 32,
  hideDisabledCheckbox: false,
  getRowType: () => '',
  dataCy: 'table',
};

export default DataGrid;
