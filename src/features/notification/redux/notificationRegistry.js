import FilterIconRounded from '../../../assets/icons/filter-icon-rounded';
import WarningRedIcon from '../../../assets/icons/warning';

const notificationRegistry = [
  {
    type: 'fd_dealer_enviou_documentos',
    permissions: ['isGestaoCadastro'],
    autoMarkAsRead: true,
    icon: FilterIconRounded,
    getAction: (notification) => {
      const detalhes = JSON.parse(notification.detalhes);
      return {
        route: '/limites/aprovacoes/limites-aprovados',
        state: { idLimite: detalhes.idLimite },
      };
    },
  },
  {
    type: 'td_nova_ordem_criada',
    permissions: ['isGestaoTestDriveOrdens'],
    autoMarkAsRead: false,
    icon: WarningRedIcon,
    getAction: () => ({
      route: '/testdrive/ordens',
      state: {},
    }),
  },
  {
    type: 'td_pendente_condicao',
    permissions: ['isGestaoPendenteCondicao'],
    autoMarkAsRead: true,
    icon: WarningRedIcon,
    getAction: () => ({
      route: '/testdrive/ordens',
      state: {},
    }),
  },
  {
    type: 'td_pedido_aguardando_analise_credito',
    permissions: ['isGestaoAnaliseCredito'],
    autoMarkAsRead: true,
    icon: WarningRedIcon,
    getAction: () => ({
      route: '/testdrive/pedidos',
      state: {},
    }),
  },
  {
    type: 'td_cadastro_veiculo_pendente',
    permissions: ['isGestaoVeiculoPendente'],
    autoMarkAsRead: true,
    icon: WarningRedIcon,
    getAction: (notification) => {
      const detalhes = JSON.parse(notification.detalhes);
      return {
        route: '/testdrive/veiculos',
        state: { veiculoId: detalhes.veiculoId },
      };
    },
  },
];

export const getRegistryByType = (type) => (
  notificationRegistry.find((r) => r.type === type)
);

export const isNotificationVisible = (notification, permissionsList) => {
  const registry = getRegistryByType(notification.tipo);
  if (!registry) return false;
  return registry.permissions.some((perm) => permissionsList[perm]);
};

export default notificationRegistry;
