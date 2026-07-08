import { connect } from 'react-redux';
import ContaCorrenteList from './contaCorrenteList';
import operations from '../../redux/operations';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  setModalCadastroFormField: (field, value) => {
    dispatch(operations.setModalCadastroFormField(field, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContaCorrenteList);
