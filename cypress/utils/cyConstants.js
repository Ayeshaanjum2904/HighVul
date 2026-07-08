export const mockLogin = {
  success: true,
  authorization: {
    user: {
      id: 111111,
      active: true,
      name: 'Usuaário Teste',
      email: 'usuario.teste@teste.com.br',
      phone: '+5511111111111',
      dealers: null,
      companies: [{
        companyId: 'FIDIS',
        company: 'FIDIS',
        permissions: [{
          permissionId: 'ANALISE_FIDIS',
          permission: 'ANALISE_FIDIS',
        },
        {
          permissionId: 'SIMULAR_IOF',
          permission: 'SIMULAR_IOF',
        },
        {
          permissionId: 'SOLICITAR_TEST_DRIVE',
          permission: 'SOLICITAR_TEST_DRIVE',
        },
        {
          permissionId: 'DASHBOARD_TESTDRIVE',
          permission: 'DASHBOARD_TESTDRIVE',
        },
        {
          permissionId: 'RELATORIOS_FINANCEIROS_FIDIS',
          permission: 'RELATORIOS_FINANCEIROS_FIDIS',
        },
        {
          permissionId: 'TD_OFERTAS_CADASTRAR',
          permission: 'TD_OFERTAS_CADASTRAR',
        },
        {
          permissionId: 'TD_OFERTAS_VISUALIZAR',
          permission: 'TD_OFERTAS_VISUALIZAR',
        },
        {
          permissionId: 'TD_PEDIDO_LISTAR_COMERCIAL',
          permission: 'TD_PEDIDO_LISTAR_COMERCIAL',
        },
        {
          permissionId: 'TD_PEDIDO_APROVAR_FINALIZACAO',
          permission: 'TD_PEDIDO_APROVAR_FINALIZACAO',
        },
        {
          permissionId: 'TD_PEDIDO_APROVAR_REVERSAO',
          permission: 'TD_PEDIDO_APROVAR_REVERSAO',
        },
        {
          permissionId: 'TD_PEDIDO_APROVAR_ANALISE_FINANCEIRO',
          permission: 'TD_PEDIDO_APROVAR_ANALISE_FINANCEIRO',
        },
        {
          permissionId: 'TD_PEDIDO_CANCELAR',
          permission: 'TD_PEDIDO_CANCELAR',
        },
        {
          permissionId: 'TD_PEDIDO_LISTAR_CREDITO',
          permission: 'TD_PEDIDO_LISTAR_CREDITO',
        },
        {
          permissionId: 'TD_PEDIDO_APROVAR_ANALISE_CREDITO',
          permission: 'TD_PEDIDO_APROVAR_ANALISE_CREDITO',
        },
        {
          permissionId: 'TD_PEDIDO_LISTAR_REGIONAL',
          permission: 'TD_PEDIDO_LISTAR_REGIONAL',
        },
        {
          permissionId: 'TD_PEDIDO_APROVAR_FATURAMENTO',
          permission: 'TD_PEDIDO_APROVAR_FATURAMENTO',
        },
        {
          permissionId: 'TD_PEDIDO_APROVAR_SEPARACAO',
          permission: 'TD_PEDIDO_APROVAR_SEPARACAO',
        },
        {
          permissionId: 'TD_PEDIDO_LISTAR_TODOS',
          permission: 'TD_PEDIDO_LISTAR_TODOS',
        },
        {
          permissionId: 'TD_PEDIDO_APROVAR_ANALISE_COMERCIAL',
          permission: 'TD_PEDIDO_APROVAR_ANALISE_COMERCIAL',
        },
        {
          permissionId: 'TD_PEDIDO_APROVAR_ANEXAR_CONTRATO',
          permission: 'TD_PEDIDO_APROVAR_ANEXAR_CONTRATO',
        },
        {
          permissionId: 'TD_PEDIDO_APROVAR_ASSINATURA_CONTRATO',
          permission: 'TD_PEDIDO_APROVAR_ASSINATURA_CONTRATO',
        },
        {
          permissionId: 'LIM_APROVAR_AGUARDANDO_APLICACAO',
          permission: 'LIM_APROVAR_AGUARDANDO_APLICACAO',
        },
        {
          permissionId: 'LIM_APROVAR_ANALISE_CREDITO',
          permission: 'LIM_APROVAR_ANALISE_CREDITO',
        },
        {
          permissionId: 'LIM_SOLICITAR_ALTERACAO_LIMITE',
          permission: 'LIM_SOLICITAR_ALTERACAO_LIMITE',
        },
        {
          permissionId: 'LIM_VISUALIZAR_ANALISE_CREDITO',
          permission: 'LIM_VISUALIZAR_ANALISE_CREDITO',
        },
        {
          permissionId: 'TD_DASH_RELATORIO',
          permission: 'TD_DASH_RELATORIO',
        },
        {
          permissionId: 'RC_ACESSAR_RENOVACAO_CADASTRAL',
          permission: 'RC_ACESSAR_RENOVACAO_CADASTRAL',
        },
        {
          permissionId: 'TD_PEDIDO_LISTAR_TODAS_BRANDS',
          permission: 'TD_PEDIDO_LISTAR_TODAS_BRANDS',
        },
        {
          permissionId: 'TD_DASH_PRINCIPAL',
          permission: 'TD_DASH_PRINCIPAL',
        },
        {
          permissionId: 'ALERTA_CRIAR',
          permission: 'ALERTA_CRIAR',
        },
        {
          permissionId: 'TD_VEICULOS_CADASTRAR',
          permission: 'TD_VEICULOS_CADASTRAR',
        },
        {
          permissionId: 'TD_VEICULOS_VISUALIZAR',
          permission: 'TD_VEICULOS_VISUALIZAR',
        },
        {
          permissionId: 'TD_DASH_LISTAR_TODAS_BRANDS',
          permission: 'TD_DASH_LISTAR_TODAS_BRANDS',
        },
        {
          permissionId: 'TD_DASH_LISTAR_TODAS_REGIONAIS',
          permission: 'TD_DASH_LISTAR_TODAS_REGIONAIS',
        },
        {
          permissionId: 'COBRANCAS_MASTER',
          permission: 'COBRANCAS_MASTER',
        },
        {
          permissionId: 'EFETUAR_PAGAMENTO_B',
          permission: 'EFETUAR_PAGAMENTO_B',
        },
        {
          permissionId: 'VISUALIZAR_DUPLICATAS_B',
          permission: 'VISUALIZAR_DUPLICATAS_B',
        },
        {
          permissionId: 'VISUALIZAR_MOVIMENTACOES_B',
          permission: 'VISUALIZAR_MOVIMENTACOES_B',
        },
        {
          permissionId: 'VISUALIZAR_SALDO',
          permission: 'VISUALIZAR_SALDO',
        },
        {
          permissionId: 'DASHBOARD_FLOOR_PLAN',
          permission: 'DASHBOARD_FLOOR_PLAN',
        },
        {
          permissionId: 'VISUALIZAR_COMUNICADOS',
          permission: 'VISUALIZAR_COMUNICADOS',
        },
        {
          permissionId: 'RELATORIOS_IOF',
          permission: 'RELATORIOS_IOF',
        },
        {
          permissionId: 'INSERIR_TAXAS_STAFF',
          permission: 'INSERIR_TAXAS_STAFF',
        },
        {
          permissionId: 'FIDIS_STAFF_ADICIONAR_DVE',
          permission: 'FIDIS_STAFF_ADICIONAR_DVE',
        },
        {
          permissionId: 'VISUALIZAR_TAXAS',
          permission: 'VISUALIZAR_TAXAS',
        },
        {
          permissionId: 'HISTORICO_TAXAS_STAFF',
          permission: 'HISTORICO_TAXAS_STAFF',
        },
        {
          permissionId: 'REVERSAO_PEDIDOS',
          permission: 'REVERSAO_PEDIDOS',
        },
        {
          permissionId: 'GESTAO_RESGATE_FIDC',
          permission: 'GESTAO_RESGATE_FIDC',
        },
        {
          permissionId: 'DASHBOARD_FIDC',
          permission: 'DASHBOARD_FIDC',
        },
        ],
        profiles: [{
          profileId: 'FINANCEIRO',
          profile: 'FINANCEIRO',
        },
        {
          profileId: 'ANALISTA_FIDIS',
          profile: 'ANALISTA_FIDIS',
        },
        {
          profileId: 'ANALISTA_FIDIS_FINANCEIRO',
          profile: 'ANALISTA_FIDIS_FINANCEIRO',
        },
        {
          profileId: 'FIDIS_TD_OFERTAS',
          profile: 'FIDIS_TD_OFERTAS',
        },
        {
          profileId: 'FIDIS_TD_PEDIDO_MASTER',
          profile: 'FIDIS_TD_PEDIDO_MASTER',
        },
        {
          profileId: 'FIDIS_LIM_ANALISE_CREDITO',
          profile: 'FIDIS_LIM_ANALISE_CREDITO',
        },
        {
          profileId: 'FIDIS_TD_DASH_MASTER',
          profile: 'FIDIS_TD_DASH_MASTER',
        },
        {
          profileId: 'HUB_RC_RENOVACAO_CADASTRAL',
          profile: 'HUB_RC_RENOVACAO_CADASTRAL',
        },
        ],
      },
      ],
      regions: null,
      brands: [
        {
          code: 'BRAND_00',
          name: 'FIAT',
        },
        {
          code: 'BRAND_57',
          name: 'JEEP',
        },
        {
          code: 'BRAND_55',
          name: 'CHRYSLER',
        },
      ],
    },
    token: 'token_teste',
  },
  errorMessage: null,
};
