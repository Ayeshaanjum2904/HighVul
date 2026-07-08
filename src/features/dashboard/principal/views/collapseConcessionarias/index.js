import { connect } from 'react-redux';

import CollapseConcessionarias from './collapseConcessionarias';

import PageOperations from '../../redux/reduxPage/operations/operations';
import selectors from '../../redux/reduxPedidosConcessionaria/selectors';

const mapStateToProps = ({ dashboard }) => ({
  isCollapseOpen: dashboard.principal.page.isCollapseConcessionariasOpen,
  subtitle: selectors.selectSubtitle(dashboard),
  disabled: selectors.isDisabled(dashboard),
});

const mapDispatchToProps = (dispatch) => ({
  setCollapseOpen: (open) => dispatch(PageOperations.setCollapseConcessionariasOpen(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollapseConcessionarias);
