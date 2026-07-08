import { connect } from 'react-redux';

import Operations from '../../../redux/operations';

import TextFilter from './textFilter';

const mapStateToProps = ({ taxas }) => ({
  taxa: taxas?.historico?.filters?.taxa,
  isLoading: taxas.historico?.requestStatus?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTaxa: (taxa) => dispatch(Operations.setFilter('taxa', taxa)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextFilter);
