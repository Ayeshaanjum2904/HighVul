import { connect } from 'react-redux';

import * as AuthSelectors from '../../redux/authSelectors';
import RenderIfNotFidis from './renderIfNotFidis';

const mapStateToProps = ({ auth }) => ({
  isFidis: AuthSelectors.isFidis(auth),
});

export default connect(mapStateToProps)(RenderIfNotFidis);
