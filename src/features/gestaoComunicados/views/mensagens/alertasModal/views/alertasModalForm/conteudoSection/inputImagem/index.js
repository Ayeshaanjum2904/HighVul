import { connect } from 'react-redux';

import InputTitulo from './inputImagem';

const mapStateToProps = ({ comunicados }) => ({
  urlImagem: comunicados.alertas.modal.alerta.urlImagem,
  nomeImagem: comunicados.alertas.modal.alerta.nomeImagem,
});

const mapDispatchToProps = () => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(InputTitulo);
