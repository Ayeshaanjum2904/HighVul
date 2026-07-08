import { connect } from 'react-redux';

import InputBusca from './inputBusca';

import operations from '../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  texto: cobrancas.contatos.page.filters.texto,
  isLoading: cobrancas?.contatos?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTextoContato: (texto) => dispatch(operations.setTextoContato(texto)),
  getContatos: () => dispatch(operations.getContatos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBusca);
