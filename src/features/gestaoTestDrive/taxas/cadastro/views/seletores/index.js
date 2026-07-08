import { connect } from 'react-redux';
import Seletores from './seletores';

import operations from '../../redux/operations';

const mapStateToProps = ({ taxas }) => ({
  startDate: taxas?.cadastro?.inputData?.inicioVigencia,
  endDate: taxas?.cadastro?.inputData?.fimVigencia,
  resetState: taxas?.cadastro?.resetState,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (data) => dispatch(operations.setInputData('inicioVigencia', data)),
  setEndDate: (data) => dispatch(operations.setInputData('fimVigencia', data)),
  setResetState: (status) => dispatch(operations.setResetState(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Seletores);
