export const permissions = {
  duplicatas: 'VISUALIZAR_DUPLICATAS',
  movimentacoes: 'VISUALIZAR_MOVIMENTACOES',
  efetuarPagamento: 'EFETUAR_PAGAMENTO',
  iof: 'SIMULAR_IOF',
  testDrive: 'SOLICITAR_TEST_DRIVE',
  beta: 'USUARIO_BETA',
  relatoriosFinanceiros: 'RELATORIOS_FINANCEIROS_FIDIS',

  dashboard: {
    relatorio: 'TD_DASH_RELATORIO',
    principal: 'TD_DASH_PRINCIPAL',
    listarTodasBrands: 'TD_DASH_LISTAR_TODAS_BRANDS',
    listarTodasRegionais: 'TD_DASH_LISTAR_TODAS_REGIONAIS',
    fidc: 'DASHBOARD_FIDC',
  },

  alertas: {
    criar: 'ALERTA_CRIAR',
    comunicados: 'FIDIS_STAFF_ADICIONAR_DVE',
  },

  resgatesFidc: 'GESTAO_RESGATE_FIDC',

  contaCorrenteDealer: 'FIDC_CONTA_CORRENTE_DEALER',

  pedidos: {
    listarTodos: 'TD_PEDIDO_LISTAR_TODOS',
    listarComercial: 'TD_PEDIDO_LISTAR_COMERCIAL',
    listarComercialFca: 'TD_PEDIDO_LISTAR_COMERCIAL_FCA',
    listarComercialFcaSeparacaoFatu: 'TD_PEDIDO_LISTAR_COMERCIAL_FCA_SEPARACAO_FATU',
    listarCredito: 'TD_PEDIDO_LISTAR_CREDITO',
    listarRegional: 'TD_PEDIDO_LISTAR_REGIONAL',
    listarOperacoes: 'TD_PEDIDO_LISTAR_OPERACOES',
    listarFaturamento: 'TD_PEDIDO_LISTAR_FATURAMENTO',
    listarTodasBrands: 'TD_PEDIDO_LISTAR_TODAS_BRANDS',
    listarFatuRegi: 'TD_PEDIDO_LISTAR_FATU_REGIO',
    listarComercialFatu: 'TD_PEDIDO_LISTAR_COMERCIAL_FATU',
    reverterPedido: 'REVERSAO_PEDIDOS',
  },

  taxas: {
    cadastrar: 'INSERIR_TAXAS_STAFF',
    historico: 'HISTORICO_TAXAS_STAFF',
  },

  veiculos: {
    cadastrar: 'TD_VEICULOS_CADASTRAR',
    visualizar: 'TD_VEICULOS_VISUALIZAR',
  },

  ofertas: {
    cadastrar: 'TD_OFERTAS_CADASTRAR',
    visualizar: 'TD_OFERTAS_VISUALIZAR',
  },

  ordem: {
    cadastrar: 'TD_ORDEM_GESTAO',
  },

  limite: {
    listarAnaliseCredito: 'LIM_VISUALIZAR_ANALISE_CREDITO',
    listarComercial: 'LIM_VISUALIZAR_COMERCIAL',
    listarTodos: 'LIM_VISUALIZAR_MASTER',
  },

  limitesAprovados: {
    gestaoFinanciamentoRede: 'FD_GESTAO_APROVACAO_ANALISTA',
    gestaoCadastro: 'FD_GESTAO_DOCUMENTOS_CADASTRO',
    gestaoJuridico: 'FD_GESTAO_DOCUMENTOS_JURIDICO',
    gestaoCredito: 'FD_GESTAO_DOCUMENTOS_CREDITO',
  },

  cobrancas: {
    master: 'COBRANCAS_MASTER',
  },

  notificacoes: {
    novaOrdem: 'TD_NOTIFICACAO_NOVA_ORDEM',
    pendenteCondicao: 'TD_NOTIFICACAO_PENDENTE_CONDICAO',
    analiseCredito: 'TD_NOTIFICACAO_ANALISE_CREDITO',
    veiculoPendente: 'TD_NOTIFICACAO_VEICULO_PENDENTE',
  },

  gestaoCorporate: 'GESTAO_CORPORATE',
};
