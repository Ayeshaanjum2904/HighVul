import { connect } from 'react-redux';

import HeaderTaxa from './headerVigencia';

const mapStateToProps = ({ taxas }) => ({
  inputDataHistorico: taxas?.historico?.inputDataHistorico,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTaxa);
