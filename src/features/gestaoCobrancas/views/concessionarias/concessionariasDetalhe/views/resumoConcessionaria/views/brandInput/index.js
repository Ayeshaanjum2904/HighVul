import { connect } from 'react-redux';

import BrandInput from './inputBrand';

const mapStateToProps = ({ cobrancas }) => ({
  brand: cobrancas.concessionarias.details.concessionaria?.brand,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandInput);
