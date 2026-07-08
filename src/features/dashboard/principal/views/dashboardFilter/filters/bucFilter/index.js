import { connect } from 'react-redux';

import BucFilter from './bucFilter';

import operations from '../../../../redux/reduxPage/operations/operations';

const mapStateToProps = ({ dashboard }) => ({
  codigoBuc: dashboard.principal.page.filters?.codigoBuc,
});

const mapDispatchToProps = (dispatch) => ({
  setCodigoBuc: (buc) => dispatch(operations.setCodigoBuc(buc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BucFilter);
