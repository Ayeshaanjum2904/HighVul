import { connect } from 'react-redux';

import BotaoProximo from './botaoProximo';
import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';
import { ModalComunicados } from '../../../../../../../redux/enums';

const mapStateToProps = ({ comunicados }) => ({
  disabled: selectors.isDisabled(comunicados),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.setTemplate(ModalComunicados.previewComunicados)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BotaoProximo);
