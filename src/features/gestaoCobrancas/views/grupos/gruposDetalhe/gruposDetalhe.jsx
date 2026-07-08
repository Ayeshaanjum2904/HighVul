import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';
import { makeStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import SnackbarList from 'common/snackbarList';

import { camelFormat } from 'utils/format';

import BreadCrumbGrupoDetalhes from './views/breadCrumbGrupoDetalhes';
import DadosGrupo from './views/dadosGrupo';
import ConcessionariasGrupo from './views/concessionariasGrupo';
import ContatosGrupo from './views/contatosGrupo';
import HistoricoGrupo from './views/historicoGrupo';

const useStyles = makeStyles({
  page: {
    gridTemplateRows: 'auto minmax(0, 1fr) auto',
  },
});

const GruposDetalhe = ({
  nomeConta, loadData, resetStore, snackbarErrors, onSnackbarClose,
}) => {
  const classes = useStyles();
  useEffect(() => {
    loadData();
    return () => {
      resetStore();
    };
  }, [loadData, resetStore]);
  return (
    <Page className={classes.page}>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbGrupoDetalhes nomeConta={camelFormat(nomeConta)} />
        </PageSubTitle>
        <PageTitle>{camelFormat(nomeConta)}</PageTitle>
      </PageHeader>
      <PageContent>
        <Scrollbars>
          <DadosGrupo />
          <ConcessionariasGrupo />
          <ContatosGrupo />
          <HistoricoGrupo />
        </Scrollbars>
      </PageContent>
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </Page>
  );
};

GruposDetalhe.propTypes = {
  nomeConta: PropTypes.string,
  loadData: PropTypes.func,
  resetStore: PropTypes.func,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
};

GruposDetalhe.defaultProps = {
  nomeConta: '',
  loadData: () => {},
  resetStore: () => {},
  snackbarErrors: [],
  onSnackbarClose: () => {},
};

export default GruposDetalhe;
