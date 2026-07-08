import { connect } from 'react-redux';

import operations from '../../redux/operations';

import SelectRegiao from './selectRegiao';
import selector from '../../redux/selectors';

const mapStateToProps = ({ limites }) => ({
  regiao: limites.page.filters.regiao,
  regioes: selector.regiaoFilter(limites),
  isLoading: limites?.page?.solicitacoesList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setRegiao: (regiao) => dispatch(operations.setRegiao(regiao)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegiao);
