import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import selectBrandEditarTaxa from './selectBrandEditarTaxa';

const mapStateToProps = ({ taxas }) => ({
  brand: taxas?.historico?.inputDataHistorico?.brand,
});

const mapDispatchToProps = (dispatch) => ({
  setBrand: (brand) => dispatch(operations.setInputData('brand', brand)),
  clearStateBrand: () => dispatch(operations.clearStateBrand()),
});

export default connect(mapStateToProps, mapDispatchToProps)(selectBrandEditarTaxa);
