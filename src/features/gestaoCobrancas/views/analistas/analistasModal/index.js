import { connect } from 'react-redux';

import AnalistasModal from './analistasModal';

const mapStateToProps = ({ cobrancas }) => ({
  modal: cobrancas.analistas.modal.modal,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalistasModal);
