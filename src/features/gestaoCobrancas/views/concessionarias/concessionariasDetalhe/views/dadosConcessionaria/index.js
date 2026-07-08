import { connect } from 'react-redux';

import DadosConcessionaria from './dadosConcessionaria';

const mapStateToProps = ({ cobrancas }) => ({
  brand: cobrancas.concessionarias.details.concessionaria?.brand,
  isLoading: cobrancas.concessionarias.details.statusRequest.isLoading,
  isError: cobrancas.concessionarias.details.statusRequest.isError,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DadosConcessionaria);
