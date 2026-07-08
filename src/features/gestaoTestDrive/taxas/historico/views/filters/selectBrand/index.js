import { connect } from 'react-redux';

import Operations from '../../../redux/operations';

import SelectBrand from './selectBrand';

const mapStateToProps = ({ taxas }) => ({
  brand: taxas?.historico?.filters?.brand,
  isLoading: taxas.historico?.requestStatus?.isLoading,
  brandList: taxas.historico?.selectors?.brands,
});

const mapDispatchToProps = (dispatch) => ({
  setBrand: (taxa) => dispatch(Operations.setFilter('brand', taxa === 'all' ? null : taxa)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBrand);
