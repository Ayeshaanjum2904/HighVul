import { connect } from 'react-redux';
import RelatorioFidcButtons from './relatorioFidcButtons';

const mapStateToProps = ({ auth }) => ({
  userEmail: auth.user?.email,
});

export default connect(mapStateToProps, null)(RelatorioFidcButtons);
