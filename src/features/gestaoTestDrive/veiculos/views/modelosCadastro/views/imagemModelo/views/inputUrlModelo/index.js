import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputUrlModelo from './inputUrlModelo';

const mapStateToProps = ({ veiculos }) => ({
  urlModelo: veiculos.cadastroModelo.modelo.urlModelo,
});

const mapDispatchToProps = (dispatch) => ({
  setUrlModelo: (urlModelo) => {
    dispatch(operations.setUrlModelo(urlModelo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputUrlModelo);
