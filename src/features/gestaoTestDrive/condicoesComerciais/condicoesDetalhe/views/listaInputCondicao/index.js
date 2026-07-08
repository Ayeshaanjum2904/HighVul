import { connect } from 'react-redux';

import DescontosList from './condicaoList';
import selector from '../../redux/selector';

const mapStateToProps = ({ condicoesComerciais }) => ({
  selectedMvs: condicoesComerciais.details.condicao.condicoes,
  mvsList: condicoesComerciais.details.mvsList,
  isLoading: condicoesComerciais.details.isLoading,
  isThereMvs: selector.isMvsListEmpty(condicoesComerciais),
  isSelectedBrand: selector.isSelectedBrand(condicoesComerciais),
});

export default connect(mapStateToProps, null)(DescontosList);
