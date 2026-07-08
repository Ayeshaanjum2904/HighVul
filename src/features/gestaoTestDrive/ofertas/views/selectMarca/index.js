import { connect } from 'react-redux';

import * as operations from '../../redux/operations';

import SelectMarca from './selectMarcaOfertas';

const mapStateToProps = ({ ofertas }) => ({
  marcas: ofertas.search.marcas,
  marcasComOfertas: ofertas.marcasComOfertas,
  isLoading: ofertas?.ofertas?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setMarcas: (marca) => dispatch(operations.setMarcas(marca)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
