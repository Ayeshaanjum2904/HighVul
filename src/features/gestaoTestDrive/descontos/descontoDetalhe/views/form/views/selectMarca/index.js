import { connect } from 'react-redux';
import { camelFormat } from 'utils/format';
import operations from '../../../../redux/operations';

import SelectMarca from './selectMarcaDescontoDetalhe';

const mapStateToProps = ({ descontos }) => ({
  marca: camelFormat(descontos.details.desconto?.brand),
  marcas: descontos.details.formInputs.brandInputs,
  isLoading: descontos.details.formInputs.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setMarca: (marca) => dispatch(operations.setMarca(marca === 'all' ? null : marca)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
