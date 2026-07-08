import { connect } from 'react-redux';

import AdicionarContatoButton from './adicionarContatoButton';

import operations from '../../../../../contatos/contatosModal/redux/operations/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (contato) => dispatch(operations.openModal(contato)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarContatoButton);
