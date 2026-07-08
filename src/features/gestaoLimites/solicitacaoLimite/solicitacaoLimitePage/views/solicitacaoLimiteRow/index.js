import { connect } from 'react-redux';

import solicitacaoDetalhesOperations from '../../../solicitacaoLimiteDetalhe/redux/operations';

import SolicitacaoLimiteRow from './solicitacaoLimiteRow';

const mapDispatchToProps = (dispatch) => ({
  onRowClicked: (id) => { dispatch(solicitacaoDetalhesOperations.openModal(id)); },
});

export default connect(null, mapDispatchToProps)(SolicitacaoLimiteRow);
