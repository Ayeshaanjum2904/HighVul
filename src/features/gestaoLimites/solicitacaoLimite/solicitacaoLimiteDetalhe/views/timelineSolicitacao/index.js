import { connect } from 'react-redux';

import TimelineSolicitacao from './timelineSolicitacao';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ limites }) => ({
  gruposSolicitacoes: selectors.gruposSolicitacoes(limites),
  isLoading: limites.details.modal.isLoading,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineSolicitacao);
