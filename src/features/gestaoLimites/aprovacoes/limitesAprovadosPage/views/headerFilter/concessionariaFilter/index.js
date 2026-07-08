import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import ConcessionariaFilter from './concessionariaFilter';

const mapStateToProps = ({ limitesAprovados }) => ({
  concessionaria: limitesAprovados.filters.matriz,
  concessionarias: selectors.matrizList(limitesAprovados),
  isLoading: limitesAprovados.limitesAprovadosList.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setConcessionaria: (matriz) => dispatch(operations.setMatriz(matriz)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariaFilter);
