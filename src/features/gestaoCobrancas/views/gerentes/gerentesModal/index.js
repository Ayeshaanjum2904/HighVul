import { connect } from 'react-redux';

import GerentesModal from './gerentesModal';

const mapStateToProps = ({ cobrancas }) => ({
  modal: cobrancas.gerentes.modal.modal,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GerentesModal);
