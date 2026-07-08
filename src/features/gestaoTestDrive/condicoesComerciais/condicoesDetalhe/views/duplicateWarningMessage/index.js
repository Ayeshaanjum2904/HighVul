import { connect } from 'react-redux';
import DuplicateWarningMessage from './duplicateWarningMessage';
import selector from '../../redux/selector';
import { Pages } from '../../../redux/enums';

const mapStateToProps = ({ condicoesComerciais }) => ({
  show: condicoesComerciais.page.page === Pages.condicoesDuplicate
    && !selector.hasChangesFromOriginal({ details: condicoesComerciais.details }),
  message: 'Edite qualquer dado para duplicar essa condição.',
});

export default connect(mapStateToProps)(DuplicateWarningMessage);
