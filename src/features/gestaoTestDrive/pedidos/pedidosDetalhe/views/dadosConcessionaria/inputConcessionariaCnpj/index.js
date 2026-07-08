import { connect } from 'react-redux';

import InpuConcessionariaCnpj from './inputConcessionariaCnpj';

const mapStateToProps = ({ pedidos }) => ({
  concessionariaCnpj: pedidos.details.modal.detalhePedido?.concessionariaCnpj,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InpuConcessionariaCnpj);
