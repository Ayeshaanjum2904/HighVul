import { connect } from 'react-redux';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';
import SelectMarca from './selectMarcaGruposPage';

const mapStateToProps = ({ cobrancas }) => ({
  selectedMarca: cobrancas.grupos.page.filters.marca,
  marcas: selectors.marcasList(cobrancas),
  isLoading: cobrancas.grupos.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateFiltersProperty: (propertyName, value) => {
    dispatch(operations.updateFiltersProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
