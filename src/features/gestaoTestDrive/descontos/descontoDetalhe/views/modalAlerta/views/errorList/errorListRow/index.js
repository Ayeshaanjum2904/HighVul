import { connect } from 'react-redux';

import ErrorListRow from './errorListRow';
import selector from '../../../../../redux/selector';

const mapStateToProps = ({ descontos }) => ({
  dataAtual: selector.dataAtual(descontos),
});

export default connect(mapStateToProps, null)(ErrorListRow);
