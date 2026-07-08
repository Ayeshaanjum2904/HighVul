import { connect } from 'react-redux';

import AlertasModalPewview from './alertasModalPreview';

const mapStateToProps = ({ comunicados }) => ({
  alerta: comunicados.alertas.modal.alerta,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AlertasModalPewview);
