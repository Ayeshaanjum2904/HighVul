import { connect } from 'react-redux';

import ConcessionariasListRow from './concessionariasListRow';

import { Pages } from '../../../../../../redux/enums';

import operations from '../../../redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (concessionaria) => {
    dispatch(operations.setConcessionariasPage(Pages.detalheConcessionaria, concessionaria));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariasListRow);
