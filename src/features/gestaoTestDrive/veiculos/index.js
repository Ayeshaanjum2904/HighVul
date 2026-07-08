import { connect } from 'react-redux';

import Veiculos from './veiculos';

const mapStateToProps = ({ veiculos }) => ({
  page: veiculos.page.page,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Veiculos);
