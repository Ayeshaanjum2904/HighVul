import { connect } from 'react-redux';

import HeaderTaxa from './headerTaxa';

const mapStateToProps = ({ taxas }) => ({
  brand: taxas?.cadastro?.inputData?.brand,
  inicioVigencia: taxas?.cadastro?.inputData?.inicioVigencia,
  fimVigencia: taxas?.cadastro?.inputData?.fimVigencia,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTaxa);
