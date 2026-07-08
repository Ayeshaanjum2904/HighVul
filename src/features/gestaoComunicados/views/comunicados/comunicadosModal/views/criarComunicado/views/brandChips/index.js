import { connect } from 'react-redux';
import BrandChips from './brandChips';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

const mapStateToProps = ({ comunicados }) => ({
  selectedBrands: selectors.selectChip(comunicados),
});

const mapDispatchToProps = (dispatch) => ({
  setBrands: (brands) => dispatch(operations.setBrand(brands)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandChips);
