import { connect } from 'react-redux';

import EmailsPageContent from './emailsPageContent';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.emails.page.templates.isLoading,
  isError: cobrancas.emails.page.templates.isError,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EmailsPageContent);
