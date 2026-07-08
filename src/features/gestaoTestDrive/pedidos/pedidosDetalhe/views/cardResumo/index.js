import { connect } from 'react-redux';

import CardResumo from './cardResumo';

const mapStateToProps = ({ pedidos }) => ({
  isLoading: pedidos.details.modal.isLoading,
  cnpj: pedidos.details.modal?.detalhePedido?.concessionariaCnpj,
  concessionariaNome: pedidos.details.modal?.detalhePedido?.concessionariaNome,
  corretorId: pedidos.details.modal?.detalhePedido?.corretorId,
  modeloDescricao: pedidos.details.modal?.detalhePedido?.descricao,
  modelYear: pedidos.details.modal?.detalhePedido?.modelYear,
  produto: pedidos.details.modal?.detalhePedido?.produto,
  data: pedidos.details.modal?.detalhePedido?.data,
  urlModelo: pedidos.details.modal?.detalhePedido?.urlImagemModelo,
});

export default connect(mapStateToProps)(CardResumo);
