import { connect } from 'react-redux';

import SelecPeriodo from './selectPeriodo';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  startDate: comunicados.alertas.modal.alerta.startDate,
  endDate: comunicados.alertas.modal.alerta.endDate,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (date) => dispatch(operations.setStartDate(date)),
  setEndDate: (date) => dispatch(operations.setEndDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelecPeriodo);
