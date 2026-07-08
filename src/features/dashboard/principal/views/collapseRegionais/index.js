import { connect } from 'react-redux';

import CollapseRegionais from './collapseRegionais';

import selectors from '../../redux/reduxPedidosRegiao/selectors';
import PageOperations from '../../redux/reduxPage/operations/operations';

const mapStateToProps = ({ dashboard }) => ({
  disabled: selectors.isDisabled(dashboard),
  subtitle: selectors.selectSubtitle(dashboard),
  isCollapseOpen: dashboard.principal.page.isCollapseRegionaisOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setCollapseOpen: (open) => dispatch(PageOperations.setCollapseRegionaisOpen(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollapseRegionais);
