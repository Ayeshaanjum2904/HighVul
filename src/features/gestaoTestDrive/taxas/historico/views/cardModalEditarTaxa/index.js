import { connect } from 'react-redux';

import CardModalEditarTaxa from './cardModalEditarTaxa';

import operations from '../../redux/operations';

const mapStateToProps = ({ taxas }) => ({
  startDate: taxas?.historico?.inputDataHistorico?.inicioVigencia,
  endDate: taxas?.historico?.inputDataHistorico?.fimVigencia,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (date) => dispatch(operations.setInputData('inicioVigencia', date)),
  setEndDate: (date) => dispatch(operations.setInputData('fimVigencia', date)),
  onSubmit: () => dispatch(operations.updateData()),
  clearForm: () => dispatch(operations.clearForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModalEditarTaxa);
