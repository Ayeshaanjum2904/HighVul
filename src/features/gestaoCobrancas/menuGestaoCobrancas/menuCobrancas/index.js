import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuCobrancas from './menuCobrancas';
import ConcessionariasPageOperations from '../../views/concessionarias/concessionariasPage/redux/operations';
import GruposPageOperations from '../../views/grupos/gruposPage/redux/operations';

const mapDispatchToProps = (dispatch) => ({
  navTo: (path) => { dispatch(push(path)); },
  setConcessionariasPage: (page) => {
    dispatch(ConcessionariasPageOperations.setConcessionariasPage(page));
  },
  setGruposPage: (page) => {
    dispatch(GruposPageOperations.setGruposPage(page));
  },
});

export default connect(null, mapDispatchToProps)(MenuCobrancas);
