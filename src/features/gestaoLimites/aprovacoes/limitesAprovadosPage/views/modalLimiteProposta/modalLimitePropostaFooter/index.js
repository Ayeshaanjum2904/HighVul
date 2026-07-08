import { connect } from 'react-redux';

import ModalLimitePropostaFooter from './modalLimitePropostaFooter';
import operations from '../../../redux/operations';

const mapStateToProps = ({ limitesAprovados }) => ({
  openPopperSave: limitesAprovados.limiteDetails.openPopperSave,
  condicaoModificada: limitesAprovados.isModified,
});

const mapDispatchToProps = (dispatch) => ({
  enviarProposta: (idLimite, status) => {
    dispatch(
      operations.updateAndSaveStatus(idLimite, status),
    );
  },
  changeStatusSisgar: () => dispatch(operations.changeStatusSisgar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalLimitePropostaFooter);
