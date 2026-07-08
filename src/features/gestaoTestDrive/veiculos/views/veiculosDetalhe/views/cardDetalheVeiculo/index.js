import { connect } from 'react-redux';

import CardDetalheVeiculo from './cardDetalheVeiculo';

const mapStateToProps = ({ veiculos }) => ({
  detalheVeiculo: veiculos.details.modal.detalheVeiculo,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetalheVeiculo);
