import { connect } from 'react-redux';

import { camelFormat } from 'utils/format';
import Operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

import SelectMarca from './selectMarcaCondicoesDetalhe';

const mapStateToProps = ({ condicoesComerciais }) => ({
  marca: camelFormat(selector.marca(condicoesComerciais)),
  marcas: condicoesComerciais.details.formInputs.brandInputs,
  isLoading: condicoesComerciais.details.formInputs.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setMarca: (marca) => dispatch(Operations.setMarca(marca === 'all' ? null : marca)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
