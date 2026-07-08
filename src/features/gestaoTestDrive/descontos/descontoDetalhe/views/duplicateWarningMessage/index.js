import { connect } from 'react-redux';
import DuplicateWarningMessage from './duplicateWarningMessage';
import selector from '../../redux/selector';
import { Pages } from '../../../redux/enums';

const mapStateToProps = ({ descontos }) => ({
  show: descontos.page.page === Pages.descontosDuplicate
    && !selector.hasChangesFromOriginal({ details: descontos.details }),
  message: 'Edite qualquer dado para duplicar essa condição.',
});

export default connect(mapStateToProps)(DuplicateWarningMessage);
