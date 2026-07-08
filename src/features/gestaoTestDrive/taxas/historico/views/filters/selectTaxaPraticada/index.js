import { connect } from 'react-redux';

import Operations from '../../../redux/operations';

import SelectTaxaPraticada from './selectTaxaPraticada';

const mapStateToProps = ({ taxas }) => ({
  taxaPraticada: taxas?.historico?.filters?.taxaPraticada,
  isLoading: taxas.historico?.requestStatus?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTaxaPraticada: (taxa) => dispatch(Operations.setFilter('taxaPraticada', taxa === 'all' ? null : taxa)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTaxaPraticada);
