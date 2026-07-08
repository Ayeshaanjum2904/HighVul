import { connect } from 'react-redux';

import ModeloAdd from './modeloAdd';

import cadastroModeloOperations from '../../../../../../modelosCadastro/redux/operations';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  openCadastroModelo: (id) => dispatch(cadastroModeloOperations.openModal(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeloAdd);
