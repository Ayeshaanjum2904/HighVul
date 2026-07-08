import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';
import SnackbarList from 'common/snackbarList';
import BreadCrumbLimitesAprovados from './views/breadCrumbLimitesAprovados';
import './limitesAprovadosPage.scss';
import HeaderFilter from './views/headerFilter/headerFilter';
import LimitesAprovadosList from './views/limitesAprovadosList';

const LimitesAprovadosPage = ({
  snackbarErrors, onSnackbarClose, getLimitesAprovados,
  getFilters, userPermission, setIdLimite,
}) => {
  const location = useLocation();
  const idLimite = location.state?.idLimite;

  useEffect(() => {
    const fetchData = async () => {
      await getFilters();
      setIdLimite(idLimite);
      await getLimitesAprovados(userPermission);
    };
    fetchData();
  }, [getFilters, getLimitesAprovados, idLimite]);

  return (
    <Page hideFooter>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbLimitesAprovados />
        </PageSubTitle>
        <PageTitle>Limites Aprovados</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="limites-aprovados__page__content">
          <HeaderFilter userPermission={userPermission} />
          <LimitesAprovadosList userPermission={userPermission} />
        </div>
      </PageContent>
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />

    </Page>
  );
};
LimitesAprovadosPage.propTypes = {
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  getLimitesAprovados: PropTypes.func,
  getFilters: PropTypes.func,
  userPermission: PropTypes.any,
  setIdLimite: PropTypes.func,
};

LimitesAprovadosPage.defaultProps = {
  snackbarErrors: [],
  onSnackbarClose: () => {},
  getLimitesAprovados: () => {},
  getFilters: () => {},
  userPermission: null,
  setIdLimite: () => {},
};

export default LimitesAprovadosPage;
