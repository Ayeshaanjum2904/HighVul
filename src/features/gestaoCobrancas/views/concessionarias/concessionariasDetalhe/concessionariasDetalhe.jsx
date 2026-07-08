import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';

import { makeStyles } from '@material-ui/styles';
import SnackbarList from 'common/snackbarList';
import BreadCrumbConcessionariasDetalhes from './views/breadCrumbConcessionariasDetalhes';
import DadosConcessionaria from './views/dadosConcessionaria';

const useStyles = makeStyles({
  page: {
    gridTemplateRows: 'auto minmax(0, 1fr) auto',
  },
});
const ConcessionariasDetalhe = ({
  nomeConcessionaria, getConcessionaria, snackbarErrors, onCloseSnackBar, resetStore,
}) => {
  useEffect(() => {
    getConcessionaria();
    return () => {
      resetStore();
    };
  }, [getConcessionaria, resetStore]);

  const classes = useStyles();
  return (
    <Page className={classes.page}>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbConcessionariasDetalhes nomeConcessionaria={nomeConcessionaria} />
        </PageSubTitle>
        <PageTitle>{nomeConcessionaria}</PageTitle>
      </PageHeader>
      <PageContent>
        <DadosConcessionaria />
      </PageContent>
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onCloseSnackBar(id)}
      />
    </Page>
  );
};

ConcessionariasDetalhe.propTypes = {
  nomeConcessionaria: PropTypes.string.isRequired,
  getConcessionaria: PropTypes.func.isRequired,
  snackbarErrors: PropTypes.array,
  onCloseSnackBar: PropTypes.func,
  resetStore: PropTypes.func,
};

ConcessionariasDetalhe.defaultProps = {
  snackbarErrors: [],
  onCloseSnackBar: () => {},
  resetStore: () => {},
};

export default ConcessionariasDetalhe;
