import { connect } from 'react-redux';

import ModalCadastroConta from './modalCadastroConta';
import operations from '../../redux/operations';

const mapStateToProps = ({ contaCorrenteDealer }) => ({
  concessionariaDados: contaCorrenteDealer.concessionariaDados,
  isLoadingConcessionaria: contaCorrenteDealer.concessionariaDados.isLoading,
  isErrorConcessionaria: contaCorrenteDealer.concessionariaDados.isError,
  modalCadastroForm: contaCorrenteDealer.modalCadastroForm,
});

const mapDispatchToProps = (dispatch) => ({
  getConcessionariaDados: (cnpj) => {
    dispatch(operations.getConcessionariaDados(cnpj));
  },
  onSubmit: (form, isEditMode) => {
    dispatch(operations.createContaCorrente(form, isEditMode));
  },
  setModalCadastroFormField: (field, value) => {
    dispatch(operations.setModalCadastroFormField(field, value));
  },
  resetModalCadastroForm: () => {
    dispatch(operations.resetModalCadastroForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalCadastroConta);
