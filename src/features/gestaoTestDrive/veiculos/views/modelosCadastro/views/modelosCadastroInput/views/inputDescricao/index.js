import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputDescricao from './inputDescricao';

const mapStateToProps = ({ veiculos }) => ({
  descricaoModelo: veiculos.cadastroModelo.modelo.descricaoModelo,
});

const mapDispatchToProps = (dispatch) => ({
  updateModeloProperty: (propertyName, value) => {
    dispatch(operations.updateModeloProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputDescricao);
