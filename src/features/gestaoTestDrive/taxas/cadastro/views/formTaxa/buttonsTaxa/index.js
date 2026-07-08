import { connect } from 'react-redux';
import operations from '../../../redux/operations';

import ButtonsTaxa from './buttonsTaxa';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  clearForm: () => dispatch(operations.clearForm()),
  onSubmit: () => dispatch(operations.salvarTaxas()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsTaxa);
