import { connect } from 'react-redux';

import BotaoVoltar from './botaoVoltar';
import operations from '../../../../redux/operations';
import { ModalComunicados } from '../../../../../../../redux/enums';

const mapStateToProps = ({ comunicados }) => ({
  disabled: comunicados.comunicados.modal.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.setTemplate(ModalComunicados.edicaoComunicados)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BotaoVoltar);
