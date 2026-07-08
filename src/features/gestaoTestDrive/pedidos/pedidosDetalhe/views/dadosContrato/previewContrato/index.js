import { connect } from 'react-redux';
import PreviewContrato from './previewContrato';

import selectors from '../../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  disabled: selectors.isPreviewContratoDisabled(pedidos),
  urlContrato: pedidos.details.modal.detalhePedido?.urlContrato,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewContrato);
