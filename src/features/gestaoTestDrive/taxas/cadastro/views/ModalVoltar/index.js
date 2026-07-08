import { connect } from 'react-redux';
import ModalVoltar from './ModalVoltar';
import operations from '../../redux/operations';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  setModalOpen: () => dispatch(operations.setModalOpen(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalVoltar);
