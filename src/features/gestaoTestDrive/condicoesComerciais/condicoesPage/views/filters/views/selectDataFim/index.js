import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import Selector from '../../../../redux/selectors';

import SelectData from './selectDataFim';

const mapStateToProps = ({ condicoesComerciais }) => ({
  data: Selector.dataFim(condicoesComerciais),
  isLoading: condicoesComerciais?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(Operations.setFilter('dataFim', data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectData);
