import { connect } from 'react-redux';

import FooterError from './footerError';

const mapStateToProps = ({ limites }) => ({
  isUpdateError: limites.details.updateStatus.isError,
  isComentarioError: limites.details.sendComentario.isError,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FooterError);
