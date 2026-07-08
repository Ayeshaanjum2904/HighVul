import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import SelectBrand from './selectBrand';

const mapStateToProps = ({ taxas }) => ({
  brand: taxas?.cadastro?.inputData?.brand,
});

const mapDispatchToProps = (dispatch) => ({
  setBrand: (value) => dispatch(operations.setHeaderInputData('brand', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBrand);
