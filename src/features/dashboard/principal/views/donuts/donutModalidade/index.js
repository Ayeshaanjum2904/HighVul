import { connect } from 'react-redux';

import * as FluxoSelectors from '../../../redux/reduxFluxo/selectors';
import * as PageSelectors from '../../../redux/reduxPage/selectors';

import DonutModalidade from './donutModalidade';

const mapStateToProps = ({ dashboard }) => ({
  isLoading: FluxoSelectors.isLoading(dashboard),
  isError: FluxoSelectors.isError(dashboard),
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  data: FluxoSelectors.donutData.modalidade(dashboard),
});

export default connect(mapStateToProps)(DonutModalidade);
