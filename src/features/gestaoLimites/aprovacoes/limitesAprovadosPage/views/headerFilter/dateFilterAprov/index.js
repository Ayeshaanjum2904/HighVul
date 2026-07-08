import { connect } from 'react-redux';

import DateFilterAprov from './dateFilterAprov';
import operations from '../../../redux/operations';

const mapStateToProps = ({ limitesAprovados }) => ({
  startDate: limitesAprovados.filters.dataInicioAprovacao,
  endDate: limitesAprovados.filters.dataFimAprovacao,
  cleaned: limitesAprovados.cleaned,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (data) => dispatch(operations.setStartDate(data)),
  setEndDate: (data) => dispatch(operations.setEndDate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateFilterAprov);
