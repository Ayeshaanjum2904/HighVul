import { connect } from 'react-redux';
import selectors from 'features/gestaoTestDrive/ordens/redux/selectors';
import operations from 'features/gestaoTestDrive/ordens/redux/operations';
import DatepickerPrazo from './datepickerPrazo';

const mapStateToProps = ({ ordens }) => ({
  feriadosList: selectors.feriadosList(ordens),
});

const mapDispatchToProps = (dispatch) => ({
  getFeriadosList: () => {
    dispatch(operations.getFeriadosList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DatepickerPrazo);
