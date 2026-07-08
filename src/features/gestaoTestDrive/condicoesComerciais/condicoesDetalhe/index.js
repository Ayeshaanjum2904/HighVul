import { connect } from 'react-redux';

import DescontoDetalhe from './condicaoDetalhe';

import operations from './redux/operations';

const mapStateToProps = ({ condicoesComerciais }) => ({
  page: condicoesComerciais.page.page,
  isModalOpen: condicoesComerciais.details.isModalOpen,
  snackbarErrors: condicoesComerciais.details.snackbar.errors,
  isErroLoadingInputs: condicoesComerciais.details.formInputs.isError,
  isModalConcessionariaOpen: condicoesComerciais.details.isModalConcessionariaOpen,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  onCloseSnackbar: (id) => dispatch(operations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DescontoDetalhe);
