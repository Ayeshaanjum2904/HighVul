import { connect } from 'react-redux';

import DescontoDetalhe from './descontoDetalhe';

import operations from './redux/operations';

const mapStateToProps = ({ descontos }) => ({
  page: descontos.page.page,
  isModalOpen: descontos.details.isModalOpen,
  isModalErrorOpen: descontos.details.modalError.isOpen,
  snackbarErrors: descontos.details.snackbar.errors,
  isErroLoadingInputs: descontos.details.formInputs.isError,
  isModalConcessionariaOpen: descontos.details.isModalConcessionariaOpen,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  onCloseSnackbar: (id) => dispatch(operations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DescontoDetalhe);
