import { connect } from 'react-redux';

import SelectBrand from './selectBrand';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  selectedBrands: comunicados.alertas.modal.alerta.selectedBrands,
});

const mapDispatchToProps = (dispatch) => ({
  setBrands: (brands) => dispatch(operations.setBrands(brands)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBrand);
