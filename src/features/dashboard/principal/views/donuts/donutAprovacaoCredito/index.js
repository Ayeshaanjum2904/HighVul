import { connect } from 'react-redux';

import * as PageSelectors from '../../../redux/reduxPage/selectors';
import * as FluxoSelectors from '../../../redux/reduxFluxo/selectors';

import DonutAprovacaoCredito from './donutAprovacaoCredito';

const mapStateToProps = ({ dashboard }) => ({
  isLoading: FluxoSelectors.isLoading(dashboard),
  isError: FluxoSelectors.isError(dashboard),
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  data: FluxoSelectors.donutData.analiseCredito(dashboard),
});

export default connect(mapStateToProps)(DonutAprovacaoCredito);
