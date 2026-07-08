import { connect } from 'react-redux';

import SolicitacaoModalFooter from './solicitacaoModalFooter';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ limites }) => ({
  status: limites.details.modal.detalheSolicitacao?.status,
  isError: selectors.isError(limites),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SolicitacaoModalFooter);
