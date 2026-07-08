import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = ({ auth, dashboard }) => ({
  user: auth.user,
  page: dashboard.principal.page.page,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
