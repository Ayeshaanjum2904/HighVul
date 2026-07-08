import { connect } from 'react-redux';

import DescontosList from './descontosList';
import selector from '../../redux/selector';

const mapStateToProps = ({ descontos }) => ({
  selectedMvs: descontos.details.desconto.descontos,
  mvsList: descontos.details.mvsList,
  isLoading: descontos.details.isLoading,
  isThereMvs: selector.isMvsListEmpty(descontos),
  isSelectedBrand: selector.isSelectedBrand(descontos),
});

export default connect(mapStateToProps, null)(DescontosList);
