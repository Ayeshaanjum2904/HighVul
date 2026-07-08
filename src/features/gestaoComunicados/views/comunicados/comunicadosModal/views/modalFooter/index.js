import { connect } from 'react-redux';

import ModalFooter from './modalFooter';

const mapStateToProps = ({ comunicados }) => ({
  templateModal: comunicados.comunicados.modal.templateModal,
});

export default connect(mapStateToProps, null)(ModalFooter);
