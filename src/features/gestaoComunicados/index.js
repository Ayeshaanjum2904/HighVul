import { connect } from 'react-redux';

import GestaoComunicados from './gestaoComunicados';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(GestaoComunicados);
