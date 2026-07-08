import { connect } from 'react-redux';

import operations from '../../redux/operations';

import SelectConcessionaria from './selectConcessionaria';

const mapStateToProps = ({ pedidos }) => ({
  concessionaria: pedidos.page.filters.concessionaria,
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setConcessionaria: (concessionaria) => dispatch(operations.setConcessionaria(concessionaria)),
  setIsFirstPageLoad: (value) => dispatch(operations.setIsFirstPageLoad(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectConcessionaria);
