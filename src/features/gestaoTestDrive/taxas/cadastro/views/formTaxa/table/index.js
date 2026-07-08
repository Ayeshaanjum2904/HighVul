import { connect } from 'react-redux';

import TableTaxa from './table';
import operations from '../../../redux/operations';

const mapStateToProps = ({ taxas }) => ({
  brand: taxas?.cadastro?.inputData?.brand,
  taxasCadastradas: taxas?.cadastro?.taxasCadastradas,
  inputData: taxas?.cadastro?.inputData,
});

const mapDispatchToProps = (dispatch) => ({
  setInputData: (param, value) => dispatch(operations.setInputData(param, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableTaxa);
