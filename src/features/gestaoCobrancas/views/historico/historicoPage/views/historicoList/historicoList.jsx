import React from 'react';
import PropTypes from 'prop-types';

import { Mixpanel, trackedProperties } from 'modules';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import {
  formatDate, camelFormat,
} from 'utils/format';

import './historicoList.scss';

const HistoricoList = ({
  historicos, isLoading, isError, openModalEmail,
  page, ipp, totalItems, setPage, setIpp,
}) => {
  const columns = [
    {
      field: 'assunto',
      headerName: 'Assunto',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 236,
      align: 'left',
    },
    {
      field: 'grupo',
      headerName: 'Grupo',
      editable: false,
      sortable: false,
      flex: 0.7,
      minWidth: 172,
      align: 'left',
      valueFormatter: (param) => camelFormat(param.value, 2),
    },
    {
      field: 'regional',
      headerName: 'Regional',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 98,
      align: 'left',
      valueFormatter: (param) => camelFormat(param.value, 2),
    },
    {
      field: 'tipoEmail',
      headerName: 'Tipo de Email',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 116,
      align: 'left',
      valueFormatter: (param) => camelFormat(param.value, 2),
    },
    {
      field: 'dataEnvio',
      headerName: 'Data de Envio',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 112,
      align: 'left',
      valueFormatter: (param) => formatDate(param?.value, 'DD/MM/YY HH:mm'),
    },

  ];
  return (
    <div className="historico__list__container">
      <DataGrid
        error={isError}
        loading={isLoading}
        columns={columns}
        rows={historicos}
        onRowClick={(param) => {
          Mixpanel.trackButtonClick('Detalhe histórico', trackedProperties.historicoPage);
          openModalEmail(param?.id);
        }}
        disableSelectionOnClick
        overlay={{
          emptyMessage: 'Nenhum histórico foi encontrado.',
          errorMessage: 'Ocorreu um erro ao carregar o histórico.',
        }}
        footer={{
          ipp,
          page,
          totalItems,
          setIpp,
          setPageFetch: setPage,
        }}
      />
    </div>
  );
};
HistoricoList.propTypes = {
  historicos: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
  openModalEmail: PropTypes.func,
};

HistoricoList.defaultProps = {
  historicos: null,
  isLoading: false,
  isError: false,
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
  openModalEmail: () => {},
};

export default HistoricoList;
