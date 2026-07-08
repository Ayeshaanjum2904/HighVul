import { connect } from 'react-redux';
import PeriodoFilter from './periodoFilter';
import operations from '../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  startDate: comunicados.comunicados.page.filters.dataInicio,
  endDate: comunicados.comunicados.page.filters.dataFim,
  cleaned: comunicados.comunicados.page.cleaned,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (data) => dispatch(operations.setStartDate(data)),
  setEndDate: (data) => dispatch(operations.setEndDate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeriodoFilter);
