import { connect } from 'react-redux';

import ContatosAssociadosList from './contatosAssociadosList';

import operations from '../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  contatos: cobrancas.grupos.details.updateContato.associacoes,
});

const mapDispatchToProps = (dispatch) => ({
  desassociarContato: (id) => dispatch(operations.desassociarContato(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContatosAssociadosList);
