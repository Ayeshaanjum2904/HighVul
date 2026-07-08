import { connect } from 'react-redux';

import modalAlerta from './modalAlerta';

import operations from '../../redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.setModalErrorClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(modalAlerta);
