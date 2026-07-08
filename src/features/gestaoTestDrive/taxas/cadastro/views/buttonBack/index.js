import { connect } from 'react-redux';
import ButtonBack from './buttonBack';
import selector from '../../redux/selector';
import operations from '../../redux/operations';

const mapStateToProps = ({ taxas }) => ({
  isNeedOpenModal: selector.isNeedOpenModal(taxas),
});

const mapDispatchToProps = (dispatch) => ({
  setModalOpen: () => dispatch(operations.setModalOpen(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBack);
