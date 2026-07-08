import { connect } from 'react-redux';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';
import SelectMarca from './selectMarcaGerentesPage';

const mapStateToProps = ({ cobrancas }) => ({
  selectedMarca: cobrancas.gerentes.page.filters.marca,
  marcas: selectors.marcasList(cobrancas),
  isLoading: cobrancas?.analistas?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setMarca: (marca) => dispatch(operations.setMarca(marca)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
