import { connect } from 'react-redux';

import AdicionarRegionalButton from './adicionarRegionalButton';

import operations from '../../../gerentesModal/redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(operations.openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarRegionalButton);
