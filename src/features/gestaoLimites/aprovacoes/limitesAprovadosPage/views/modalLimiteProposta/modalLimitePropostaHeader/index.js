import { connect } from 'react-redux';

import ModalLimitePropostaHeader from './modalLimitePropostaHeader';
import operations from '../../../redux/operations';

const mapStateToProps = ({ limitesAprovados }) => ({
  condicaoModificada: limitesAprovados.isModified,
});

const mapDispatchToProps = (dispatch) => ({
  enviarProposta: (idLimite, status, motivo = null) => dispatch(
    operations.updateAndSaveStatus(idLimite, status, motivo),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalLimitePropostaHeader);
