import { connect } from 'react-redux';
import Form from './form';
import operations from '../../redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  getBrandInputs: () => dispatch(operations.getBrandInputs()),
  getProdutoInputs: () => dispatch(operations.getProdutoInputs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
