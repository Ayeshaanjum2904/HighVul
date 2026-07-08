import { connect } from 'react-redux';

import TemplateListRow from './templateListRow';

import EmailsModalOperations from '../../../../emailsModal/redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (template) => dispatch(EmailsModalOperations.openModal(template)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateListRow);
