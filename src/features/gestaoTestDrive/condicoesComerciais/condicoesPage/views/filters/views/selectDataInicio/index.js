import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import Selector from '../../../../redux/selectors';

import SelectData from './selectDataInicio';

const mapStateToProps = ({ condicoesComerciais }) => ({
  data: Selector.dataInicio(condicoesComerciais),
  isLoading: condicoesComerciais?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(Operations.setFilter('dataInicio', data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectData);
