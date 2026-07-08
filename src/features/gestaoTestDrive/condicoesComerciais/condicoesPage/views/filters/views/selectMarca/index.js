import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import Selector from '../../../../redux/selectors';

import SelectMarca from './selectMarcaCondicoesPage';

const mapStateToProps = ({ condicoesComerciais }) => ({
  marca: condicoesComerciais.page.filters.brand,
  marcasList: Selector.marcasList(condicoesComerciais),
  isLoading: condicoesComerciais?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setMarca: (marca) => dispatch(Operations.setFilter('brand', marca === 'all' ? null : marca)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
