import { connect } from 'react-redux';

import Operations from '../../../redux/operations';

import SelectData from './selectData';

const mapStateToProps = ({ taxas }) => ({
  dataFinal: taxas.historico?.filters?.dataFim,
  dataInicial: taxas.historico?.filters?.dataInicio,
  isLoading: taxas.historico?.requestStatus?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setDataInicial: (data) => dispatch(Operations.setFilter('dataInicio', data)),
  setDataFinal: (data) => dispatch(Operations.setFilter('dataFim', data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectData);
