import { connect } from 'react-redux';

import SendButton from './cancelButton';

import operations from '../../../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.grupos.details.updateGrupo.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setIsEditing: (value) => dispatch(operations.setIsEditing(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendButton);
