import { connect } from 'react-redux';

import DadosSolicitacao from './dadosSolicitacao';

const mapStateToProps = ({ limites }) => ({
  tipo: limites.details.modal?.detalheSolicitacao?.tipo,
});

export default connect(mapStateToProps, null)(DadosSolicitacao);
