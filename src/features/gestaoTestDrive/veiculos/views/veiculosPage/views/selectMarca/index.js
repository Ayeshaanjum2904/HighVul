import { connect } from 'react-redux';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

import SelectMarca from './selectMarcaVeiculosPage';

const mapStateToProps = ({ veiculos }) => ({
  marca: veiculos.page.filters.marca,
  marcas: selectors.mapMarca(veiculos),
  isLoading: veiculos?.page?.veiculosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setMarca: (marca) => dispatch(operations.setMarca(marca)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
