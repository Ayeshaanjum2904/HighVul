import { connect } from 'react-redux';

import DeletarModeloButton from './deletarModeloButton';

import selectors from '../../../redux/selectors';

const mapStateToProps = ({ veiculos }) => ({
  id: veiculos.cadastroModelo.modelo.id,
  disabled: selectors.isButtonDisabled(veiculos),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletarModeloButton);
