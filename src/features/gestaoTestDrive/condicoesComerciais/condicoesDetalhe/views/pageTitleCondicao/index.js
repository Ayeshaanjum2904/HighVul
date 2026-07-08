import { connect } from 'react-redux';

import OperationsDescontoPage from '../../../condicoesPage/redux/operations';
import { Pages } from '../../../redux/enums';

import PageTitleCondicao from './pageTitleCondicao';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(OperationsDescontoPage.setPage(Pages.condicoesPage)),
});

export default connect(null, mapDispatchToProps)(PageTitleCondicao);
