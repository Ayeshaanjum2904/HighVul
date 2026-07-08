import { connect } from 'react-redux';

import Destinatarios from './destinatarios';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  destinatarios: selectors.destinatariosFormated(cobrancas),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Destinatarios);
