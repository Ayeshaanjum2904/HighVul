import { connect } from 'react-redux';
import MensagemCard from './mensagemCard';

const mapStateToProps = ({ comunicados }) => ({
  signedUrl: comunicados.alertas.modal.signedUrl,
});

export default connect(mapStateToProps)(MensagemCard);
