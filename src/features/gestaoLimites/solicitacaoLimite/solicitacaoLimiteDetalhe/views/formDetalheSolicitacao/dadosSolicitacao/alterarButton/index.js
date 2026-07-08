import { connect } from 'react-redux';
import AlterarButton from './alterarButton';

import operations from '../../../../redux/operations';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  setAlteracaoValor: () => { dispatch(operations.setAlteracaoValor()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AlterarButton);
