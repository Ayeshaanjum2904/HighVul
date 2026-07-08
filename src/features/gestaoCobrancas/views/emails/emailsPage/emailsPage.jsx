import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';
import SnackbarList from 'common/snackbarList';

import { makeStyles } from '@material-ui/styles';

import BreadCrumbEmails from './views/breadCrumbEmail';
import EmailsPageContent from './views/emailsPageContent';
import EmailsModal from '../emailsModal';

const useStyles = makeStyles({
  page: {
    gridTemplateRows: 'auto minmax(0, 1fr) auto',
  },
});

const EmailsPage = ({
  resetStore, getTemplates, getConfiguracoes,
  snackbarErrors, onSnackbarClose, isModalOpen,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getTemplates();
    getConfiguracoes();
    return () => {
      resetStore();
    };
  }, [resetStore, getTemplates, getConfiguracoes]);
  return (
    <Page className={classes.page}>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbEmails />
        </PageSubTitle>
        <PageTitle>E-mails de cobrança</PageTitle>
      </PageHeader>
      <PageContent>
        <EmailsPageContent />
      </PageContent>
      {isModalOpen ? <EmailsModal /> : null}
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </Page>
  );
};

EmailsPage.propTypes = {
  resetStore: PropTypes.func,
  getTemplates: PropTypes.func,
  getConfiguracoes: PropTypes.func,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

EmailsPage.defaultProps = {
  resetStore: () => {},
  getTemplates: () => {},
  getConfiguracoes: () => {},
  snackbarErrors: [],
  onSnackbarClose: () => {},
  isModalOpen: false,
};

export default EmailsPage;
