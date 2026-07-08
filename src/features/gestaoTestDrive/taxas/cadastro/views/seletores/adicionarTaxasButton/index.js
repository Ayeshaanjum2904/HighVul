import { connect } from 'react-redux';

import AdicionarTaxasButton from './adicionarTaxasButton';
import operations from '../../../redux/operations';
import selector from '../../../redux/selector';

const mapStateToProps = ({ taxas }) => ({
  disabled: selector.isDisabledCreate(taxas),
});

const mapDispatchToProps = (dispatch) => ({
  setFormOpen: (status) => dispatch(operations.setFormOpen(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarTaxasButton);
