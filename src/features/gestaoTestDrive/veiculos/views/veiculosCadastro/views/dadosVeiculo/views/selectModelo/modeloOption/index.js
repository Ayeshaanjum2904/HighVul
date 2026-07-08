import { connect } from 'react-redux';

import ModeloOption from './modeloOption';

import cadastroModeloOperations from '../../../../../../modelosCadastro/redux/operations';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  openCadastroModelo: (id) => dispatch(cadastroModeloOperations.openModal(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeloOption);
