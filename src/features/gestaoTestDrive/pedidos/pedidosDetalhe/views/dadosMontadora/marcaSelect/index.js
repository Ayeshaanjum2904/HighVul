import { connect } from 'react-redux';

import selectors from '../../../redux/selectors';
import MarcaSelect from './marcaSelect';

const mapStateToProps = (state) => ({
  marcaMontadora: selectors.marcaPedidoSelecionada(state.pedidos),
});

export default connect(mapStateToProps)(MarcaSelect);
