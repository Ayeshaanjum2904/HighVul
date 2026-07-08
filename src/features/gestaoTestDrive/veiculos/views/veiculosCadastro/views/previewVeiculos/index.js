import { connect } from 'react-redux';

import PreviewVeiculos from './previewVeiculos';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ veiculos }) => ({
  urlVeiculosList: veiculos.cadastroVeiculo.urlVeiculosList,
  showWarningUpload: selectors.showWarningUpload(veiculos),
});

const mapDispatchToProps = () => ({

}
);

export default connect(mapStateToProps, mapDispatchToProps)(PreviewVeiculos);
