import { connect } from 'react-redux';

import ComunicacaoModal from './comunicadosModal';
import operations from './redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  template: comunicados.comunicados.modal.templateModal,
  isLoading: comunicados.comunicados.modal.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setKey: (key) => dispatch(operations.setKey(key)),
  resetStore: () => dispatch(operations.resetStore()),
  getBrands: () => dispatch(operations.getBrand()),
  closeModal: () => dispatch(operations.setCloseModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComunicacaoModal);
