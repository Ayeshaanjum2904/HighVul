import { React, useEffect } from 'react';
import {
  Page, PageHeader, PageTitle, PageContent, PageFooter,
  PageSubTitle,
} from 'common/layout/page';

import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import HistoricoLimite from '../historicoLimite/historicoLimite';
import DadosAprovacao from '../dadosAprovacao';
import BreadCrumbJuridico from './views/breadCrumbCredito/breadCrumbCredito';
import ButtonBack from '../buttonBack';
import ButtonsFooterCredito from './views/buttonsFooter';
import { HeaderCreditoStyle, PageContentCreditoStyle } from './limitesAprovadosCredito.style';
import LimiteActions from '../limitesAprovadosPage/views/limitesAprovadosList/limiteActions';

const LimitesAprovadosCredito = ({
  detalhes, historico, resetStore, enviarProposta, user,
  condicaoSisgar,
}) => {
  const history = useHistory();

  useEffect(() => () => resetStore(), [resetStore]);

  const updateStatus = async (id, status, motivo) => {
    if (await enviarProposta(id, status, motivo)) history.replace('/limites/aprovacoes/limites-aprovados');
  };

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <ButtonBack />
          <BreadCrumbJuridico />
        </PageSubTitle>
        <HeaderCreditoStyle>
          <div>
            <PageTitle>Informações do crédito</PageTitle>
            <span className="id-limite">
              ID APROVAÇÃO #
              {detalhes.idLimite}
            </span>
          </div>
          <LimiteActions
            iconProps={{ size: 32 }}
            limite={detalhes}
            enviarProposta={updateStatus}
          />
        </HeaderCreditoStyle>
      </PageHeader>
      <PageContent>
        <PageContentCreditoStyle>
          <HistoricoLimite historico={historico} />
          <DadosAprovacao detalhes={detalhes} user={user} condicaoSisgar={condicaoSisgar} />
        </PageContentCreditoStyle>
      </PageContent>
      <PageFooter>
        <ButtonsFooterCredito
          idLimite={detalhes.idLimite}
          user={user}
        />
      </PageFooter>
    </Page>
  );
};

LimitesAprovadosCredito.propTypes = {
  detalhes: PropTypes.any,
  historico: PropTypes.array,
  resetStore: PropTypes.func,
  enviarProposta: PropTypes.func,
  user: PropTypes.object.isRequired,
  condicaoSisgar: PropTypes.string,
};

LimitesAprovadosCredito.defaultProps = {
  detalhes: {},
  historico: [],
  resetStore: () => {},
  enviarProposta: () => {},
  condicaoSisgar: null,
};

export default LimitesAprovadosCredito;
