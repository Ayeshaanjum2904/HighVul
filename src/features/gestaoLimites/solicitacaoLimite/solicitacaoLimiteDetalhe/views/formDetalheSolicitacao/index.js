import { connect } from 'react-redux';

import FormDetalheSolicitacao from './formDetalheSolicitacao';

const mapStateToProps = ({ limites }) => ({
  detalheSolicitacao: limites.details.modal?.detalheSolicitacao,
  isError: limites.details.modal.isError,
  isLoading: limites.details.modal.isLoading,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDetalheSolicitacao);
