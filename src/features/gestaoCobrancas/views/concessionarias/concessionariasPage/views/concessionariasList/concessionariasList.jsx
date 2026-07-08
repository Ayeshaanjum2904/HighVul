import React from 'react';
import PropTypes from 'prop-types';
import { camelFormat, formatCnpj } from 'utils/format';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import { Pages } from 'features/gestaoCobrancas/redux/enums';

const ConcessionariasList = ({
  concessionarias, isLoading, isError, page, ipp, setIpp,
  setPage, totalItems, setConcessionariasPage,
}) => {
  const columns = [
    {
      field: 'nome',
      headerName: 'Nome da Concessionária',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 194,
      align: 'left',
      valueFormatter: (param) => camelFormat(param.value, 2),
    },
    {
      field: 'cnpj',
      headerName: 'Cnpj',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 140,
      align: 'left',
      valueFormatter: (param) => formatCnpj(param.value),
    },
    {
      field: 'codBuc',
      headerName: 'Código Buc',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 100,
      align: 'left',
    },
    {
      field: 'regional',
      headerName: 'Regional',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 100,
      align: 'left',
      valueFormatter: (param) => camelFormat(param.value, 2),
    },
    {
      field: 'brand',
      headerName: 'Brand',
      editable: false,
      sortable: false,
      flex: 0.7,
      minWidth: 74,
      align: 'left',
    },
    {
      field: 'tipo',
      headerName: 'Tipo',
      editable: false,
      sortable: false,
      flex: 0.7,
      minWidth: 60,
      align: 'left',
    },
  ];

  return (
    <DataGrid
      error={isError}
      loading={isLoading}
      columns={columns}
      rows={concessionarias}
      getRowId={(row) => row.codBuc}
      onRowClick={(param) => setConcessionariasPage(Pages.detalheConcessionaria, param.row)}
      disableSelectionOnClick
      overlay={{
        emptyMessage: 'Nenhuma concessionária foi encontrada.',
        errorMessage: 'Ocorreu um erro ao carregar as concessionárias.',
      }}
      footer={{
        ipp,
        page,
        totalItems,
        setIpp,
        setPageFetch: setPage,
      }}
    />
  );
};

ConcessionariasList.propTypes = {
  concessionarias: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
  setConcessionariasPage: PropTypes.func,
};

ConcessionariasList.defaultProps = {
  concessionarias: null,
  isLoading: false,
  isError: false,
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
  setConcessionariasPage: () => {},
};

export default ConcessionariasList;
