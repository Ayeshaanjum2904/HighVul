import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import Selector from '../../../../redux/selector';

import SelectMarca from './selectMarcaFilters';

const mapStateToProps = ({ descontos }) => ({
  marca: descontos.page.filters.brand,
  marcasList: Selector.marcasList(descontos),
  isLoading: descontos?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setMarca: (marca) => dispatch(Operations.setFilter('brand', marca === 'all' ? null : marca)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
