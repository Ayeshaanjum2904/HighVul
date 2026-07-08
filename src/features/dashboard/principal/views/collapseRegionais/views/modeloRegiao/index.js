import { connect } from 'react-redux';

import ModeloRegiao from './modeloRegiao';
import * as PageSelectors from '../../../../redux/reduxPage/selectors';
import selectors from '../../../../redux/reduxModeloRegiao/selectors';

import PageOperations from '../../../../redux/reduxPage/operations/operations';
import ModeloRegiaoOperations from '../../../../redux/reduxModeloRegiao/operations';

const mapStateToProps = ({ dashboard }) => ({
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  isLoading: selectors.isLoading(dashboard),
  isError: selectors.isError(dashboard),
  data: selectors.modeloRegiaoChartData(dashboard),
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => dispatch(PageOperations.registerLoader(id, loadOp)),
  getModeloRegiao: () => ModeloRegiaoOperations.getModeloRegiao(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeloRegiao);
