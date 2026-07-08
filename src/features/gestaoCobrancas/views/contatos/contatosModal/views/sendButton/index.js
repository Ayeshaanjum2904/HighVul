import { connect } from 'react-redux';

import SendButton from './sendButton';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.contatos.modal.sendContato.isLoading,
  title: selectors.buttonTitle(cobrancas),
  disabled: selectors.isButtonEnabled(cobrancas),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SendButton);
