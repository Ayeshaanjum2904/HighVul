import { connect } from 'react-redux';

import TableEditarTaxa from './tableEditarTaxa';

import operations from '../../../redux/operations';

const mapStateToProps = ({ taxas }) => ({
  brand: taxas?.historico?.inputDataHistorico.brand,
  inputData: taxas?.historico?.inputDataHistorico,
});

const mapDispatchToProps = (dispatch) => ({
  setInputData: (param, value) => dispatch(operations.setInputData(param, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableEditarTaxa);
