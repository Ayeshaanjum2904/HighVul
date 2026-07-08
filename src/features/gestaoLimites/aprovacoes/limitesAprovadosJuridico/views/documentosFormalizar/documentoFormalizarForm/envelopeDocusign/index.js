import { connect } from 'react-redux';
import EnvelopeDocusign from './envelopeDocusign';
import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

const mapStateToProps = ({ limitesAprovadosJuridico, auth }) => ({
  dataSuccedModal: !limitesAprovadosJuridico.dadosModalDocusign.isError,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  getDadosModal: (idDocusign) => dispatch(
    operations.getDadosEnvelopeDocusign(idDocusign),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnvelopeDocusign);
