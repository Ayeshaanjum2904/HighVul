const statusPerfil = {
  juridico: [
    'enviado_para_juridico',
    'analise_juridico',
    'atualizacao_docs_juridico',
  ],
  financiamentoRede: [
    'Liberar para dealer',
    'aprovacao_retida',
    'aprovacao_aceita_dealer',
    'cadastro_atualizado',
    'analise_financiamento_rede',
    'docs_juridico_atualizado_dealer',
    'docs_formalizar_atualizado_dealer',
    'docs_formalizar_enviados_sem_retorno',
    'docusing_docs_formalizar_sem_retorno',
    'assinatura_docusign',
    'obs_do_credito',
    'aprovacao_pausada',
    'Pendente',
    'reativada_sisgar',
  ],
  cadastro: [
    'enviado_para_cadastro',
    'renovacao_cadastral',
    'documentos_enviados_parcialmente',
    'documentos_atualizados_dealer',
  ],
  credito: [
    'enviado_para_credito',
  ],
};

const getPerfil = (permissions) => {
  switch (true) {
    case permissions.isGestaoJuridico:
      return 'juridico';
    case permissions.isGestaoFinanciamentoRede:
      return 'financiamentoRede';
    case permissions.isGestaoCadastro:
      return 'cadastro';
    case permissions.isGestaoCredito:
      return 'credito';
    default:
      return null;
  }
};

export const getInitialStatus = (status, permissions, statusList) => {
  if (status.length > 0) {
    return status;
  }

  if (permissions.isAll) {
    return statusList;
  }

  const perfil = getPerfil(permissions);

  const filteredStatus = statusList.filter(({ value }) => statusPerfil[perfil].includes(value));

  return filteredStatus.length > 0 ? filteredStatus : statusList;
};

export default getInitialStatus;
