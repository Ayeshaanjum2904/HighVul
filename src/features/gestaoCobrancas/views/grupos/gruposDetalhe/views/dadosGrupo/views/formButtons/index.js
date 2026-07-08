import { connect } from 'react-redux';

import FormButtons from './formButtons';

const mapStateToProps = ({ cobrancas }) => ({
  isEditing: cobrancas.grupos.details.updateGrupo.isEditing,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FormButtons);
