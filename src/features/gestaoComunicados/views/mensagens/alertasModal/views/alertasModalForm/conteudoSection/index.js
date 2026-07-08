import { connect } from 'react-redux';

import ConteudoSection from './conteudoSection';

const mapStateToProps = ({ comunicados }) => ({
  urlImagem: comunicados.alertas.modal.alerta.urlImagem,
  isLoading: comunicados.alertas.modal.uploadImagem.isLoading,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ConteudoSection);
