import { connect } from 'react-redux';

import InputNome from './inputRamal';

import operations from '../../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  ramal: cobrancas.contatos.modal.contatoInfo.ramal,
});

const mapDispatchToProps = (dispatch) => ({
  setRamal: (ramal) => dispatch(operations.setRamal(ramal)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputNome);
