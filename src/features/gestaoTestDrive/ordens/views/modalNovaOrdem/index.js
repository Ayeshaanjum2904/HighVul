import { connect } from 'react-redux';
import ModalNovaOrdem from './modalNovaOrdem';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ ordens }) => ({
  isTemplateLoading: selectors.getTemplateLoadingStatus(ordens),
  isSendigCriacao: selectors.getCriacaoOrdemLoadingStatus(ordens),
  selectedOrdem: selectors.getSelectedOrdem(ordens),
});

const mapDispatchToProps = (dispatch) => ({
  downloadTemplate: () => {
    dispatch(operations.downloadTemplate());
  },
  createOrdem: (formData, onSuccess) => {
    dispatch(operations.createOrdem(formData, onSuccess));
  },
  editOrdem: (formData, onSuccess) => {
    dispatch(operations.editOrdem(formData, onSuccess));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalNovaOrdem);
