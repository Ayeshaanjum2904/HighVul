import { connect } from 'react-redux';

import DetalheCadastroVeiculo from './detalheCadastroVeiculo';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ veiculos }) => ({
  veiculo: veiculos.cadastroVeiculo.veiculo,
  urlSelecionada: selectors.selectUrlVeiculo(veiculos),
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DetalheCadastroVeiculo);
