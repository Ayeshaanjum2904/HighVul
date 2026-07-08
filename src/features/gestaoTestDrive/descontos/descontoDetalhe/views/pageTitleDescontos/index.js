import { connect } from 'react-redux';

import OperationsDescontoPage from '../../../descontoPage/redux/operations';
import { Pages } from '../../../redux/enums';

import PageTitleDescontos from './pageTitleDescontos';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(OperationsDescontoPage.setPage(Pages.descontosPage)),
});

export default connect(null, mapDispatchToProps)(PageTitleDescontos);
