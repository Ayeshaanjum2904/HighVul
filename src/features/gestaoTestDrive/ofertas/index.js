import { connect } from 'react-redux';
import * as operations from './redux/operations';

import Ofertas from './ofertas';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  setPagina: () => dispatch(operations.getOfertas()),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ofertas);
