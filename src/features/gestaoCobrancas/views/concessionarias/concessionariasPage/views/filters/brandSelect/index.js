import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import SelectRegional from './selectBrand';

const mapStateToProps = ({ cobrancas }) => ({
  brand: cobrancas.concessionarias.page.filters.brand,
  brandList: selectors.brandList(cobrancas),
  isLoading: cobrancas.concessionarias.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setBrand: (brand) => dispatch(operations.setFilter('brand', brand)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegional);
