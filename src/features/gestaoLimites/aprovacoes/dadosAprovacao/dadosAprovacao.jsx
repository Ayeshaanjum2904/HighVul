import InfoModal from 'features/gestaoLimites/aprovacoes/limitesAprovadosPage/views/modalLimiteProposta/infoModal/infoModal';
import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatDadosInfoModal } from 'utils/format';
import './dadosAprovacao.scss';
import { permissions } from 'modules/auth';
import { hasPermission } from 'modules/auth/authLogic';
import ObservacoesAprovacao from '../observacoesAprovacao';

const DadosAprovacao = ({
  detalhes, user, condicaoSisgar, setCondicao,
}) => {
  useEffect(() => {
    if (detalhes?.id && detalhes?.condicao) {
      setCondicao(detalhes.id, detalhes.condicao);
    }
  }, [detalhes]);

  const canRenderCondicao = (hasPermission(user, permissions.limitesAprovados.gestaoCadastro)
    || hasPermission(user, permissions.limitesAprovados.gestaoCredito)
    || hasPermission(user, permissions.limitesAprovados.gestaoFinanciamentoRede));

  const canRenderCondicaoSisgar = hasPermission(
    user,
    permissions.limitesAprovados.gestaoJuridico,
  );
  const { itensConcessionaria, itensProduto } = formatDadosInfoModal(detalhes);
  return (
    <>
      <div className="dados">
        <InfoModal
          descricaoProduto={detalhes.descricaoProduto}
          itensConcessionaria={itensConcessionaria}
          itensProduto={itensProduto}
          condicao={detalhes.condicao}
          userCanEditCondicao={hasPermission(
            user,
            permissions.limitesAprovados.gestaoFinanciamentoRede,
          )}
          title="Dados da aprovação"
          condicaoSisgar={condicaoSisgar}
          canRenderCondicao={canRenderCondicao}
          canRenderCondicaoSisgar={canRenderCondicaoSisgar}
          idVersao={detalhes.id}
          idLimite={detalhes.idLimite}
        />
      </div>
      <ObservacoesAprovacao limite={detalhes} />
    </>
  );
};
DadosAprovacao.propTypes = {
  detalhes: PropTypes.any,
  user: PropTypes.object.isRequired,
  condicaoSisgar: PropTypes.string,
  setCondicao: PropTypes.func,
};
DadosAprovacao.defaultProps = {
  detalhes: {},
  condicaoSisgar: null,
  setCondicao: () => { },
};
export default DadosAprovacao;
