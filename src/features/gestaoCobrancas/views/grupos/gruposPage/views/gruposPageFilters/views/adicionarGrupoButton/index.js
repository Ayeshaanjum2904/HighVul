import { connect } from 'react-redux';

import AdicionarGrupoButton from './adicionarGrupoButton';

import GruposModalOperations from '../../../../../gruposModal/redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(GruposModalOperations.openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarGrupoButton);
