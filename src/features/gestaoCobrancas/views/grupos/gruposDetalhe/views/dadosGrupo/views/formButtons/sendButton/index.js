import { connect } from 'react-redux';

import SendButton from './sendButton';

import operations from '../../../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.grupos.details.updateGrupo.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheGrupo: () => dispatch(operations.updateDetalheGrupo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendButton);
