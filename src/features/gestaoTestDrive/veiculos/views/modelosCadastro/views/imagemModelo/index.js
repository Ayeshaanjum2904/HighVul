import { connect } from 'react-redux';

import ImagemModelo from './imagemModelo';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ veiculos }) => ({
  urlSelecionada: selectors.selectUrlModelo(veiculos),
});

const mapDispatchToProps = (dispatch) => ({
  deleteImagem: () => dispatch(operations.deleteImagem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagemModelo);
