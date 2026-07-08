import { connect } from 'react-redux';
import AlterarEtapaButton from './alterarEtapaButton';
import detalhesOperations from '../../../../redux/operations';

const mapStateToProps = () => ({
});
const mapDispatchToProps = (dispatch) => ({
  setOpenModalAlterar: (open) => { dispatch(detalhesOperations.openModalAlterar(open)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AlterarEtapaButton);
