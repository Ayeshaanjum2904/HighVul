import { connect } from 'react-redux';

import CardDetalhe from './cardDetalhe';

const mapStateToProps = ({ limites }) => ({
  isLoading: limites.details.modal.isLoading,
  data: limites.details.modal?.detalheSolicitacao?.data,
  tipo: limites.details.modal?.detalheSolicitacao?.tipo,
});

export default connect(mapStateToProps)(CardDetalhe);
