import { connect } from 'react-redux';

import DateFilterVenc from './dateFilterVenc';
import operations from '../../../redux/operations';

const mapStateToProps = ({ limitesAprovados }) => ({
  startDate: limitesAprovados.filters.dataInicioVencimento,
  endDate: limitesAprovados.filters.dataFimVencimento,
  cleaned: limitesAprovados.cleaned,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (data) => dispatch(operations.setStartDateVenc(data)),
  setEndDate: (data) => dispatch(operations.setEndDateVenc(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateFilterVenc);
