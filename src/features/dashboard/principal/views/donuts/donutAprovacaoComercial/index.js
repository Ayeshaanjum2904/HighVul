import { connect } from 'react-redux';

import * as PageSelectors from '../../../redux/reduxPage/selectors';
import * as FluxoSelectors from '../../../redux/reduxFluxo/selectors';

import DonutAprovacaoComercial from './donutAprovacaoComercial';

const mapStateToProps = ({ dashboard }) => ({
  isLoading: FluxoSelectors.isLoading(dashboard),
  isError: FluxoSelectors.isError(dashboard),
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  data: FluxoSelectors.donutData.aprovacaoComercial(dashboard),
});

export default connect(mapStateToProps)(DonutAprovacaoComercial);
