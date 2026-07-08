import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import colors from 'assets/styles/colors';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import PropTypes from 'prop-types';
import { formatCnpj, camelFormat } from 'utils/format';
import ModalCadastroConta from '../modalCadastroConta';

const ContaCorrenteList = ({
  isLoading, data, error, setModalCadastroFormField,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const renderCnpj = (row) => (
    <Box>
      <Typography sx={{ color: colors.secundary_color_800, fontSize: 12 }}>
        {row.concessionaria}
      </Typography>
      <Typography sx={{ color: colors.secundary_color_700, fontSize: 14 }}>
        {formatCnpj(row.cnpj)}
      </Typography>
    </Box>
  );

  const mapModalCadastroForm = (row) => {
    setModalCadastroFormField('id', row.id || '');
    setModalCadastroFormField('cnpj', row.cnpj || '');
    setModalCadastroFormField('nomeConcessionaria', row.concessionaria || '');
    setModalCadastroFormField('brand', row.brandId);
    setModalCadastroFormField('brandLabel', camelFormat(row?.brand) || '');
    setModalCadastroFormField('banco', row.banco || '');
    setModalCadastroFormField('agencia', row.agencia || '');
    setModalCadastroFormField('conta', row.conta || '');
  };

  const handleRowClick = (row) => {
    mapModalCadastroForm(row);
    setOpenModal(true);
  };

  const columns = [
    {
      field: 'brand',
      headerName: 'Brand',
      editable: false,
      sortable: false,
      flex: 0.6,
      minWidth: 36,
      align: 'left',
      renderCell: (param) => (param.row.brand),
    },
    {
      field: 'cnpj',
      headerName: 'CNPJ/CONCESSIONÁRIA',
      editable: false,
      sortable: false,
      flex: 1.6,
      minWidth: 300,
      align: 'left',
      renderCell: (param) => (renderCnpj(param.row)),
    },
    {
      field: 'banco',
      headerName: 'BANCO',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 120,
      align: 'left',
      renderCell: (param) => (param.row.banco),
    },
    {
      field: 'agencia',
      headerName: 'Agência',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 110,
      align: 'left',
      renderCell: (param) => (param.row.agencia),
    },
    {
      field: 'conta',
      headerName: 'Conta',
      editable: false,
      sortable: false,
      flex: 1.1,
      minWidth: 180,
      align: 'left',
      renderCell: (param) => (param.row.conta),
    },
  ];

  return (
    <Box height="100%">
      <DataGrid
        error={error}
        loading={isLoading}
        columns={columns}
        rows={data}
        hideFooterPagination
        hideFooter
        disableSelectionOnClick
        isRowSelectable
        onRowClick={({ row }) => handleRowClick(row)}
        onSelect
        overlay={{
          emptyMessage: 'Nenhum resultado encontrado.',
          errorMessage: 'Erro ao exibir contas correntes.\nPor favor, tente novamente mais tarde.',
        }}
      />
      {openModal && (
        <ModalCadastroConta
          setOpen={setOpenModal}
          isEditMode
        />
      )}
    </Box>
  );
};

ContaCorrenteList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  error: PropTypes.bool,
  setModalCadastroFormField: PropTypes.func.isRequired,
};

ContaCorrenteList.defaultProps = {
  isLoading: false,
  data: [],
  error: false,
};

export default ContaCorrenteList;
