export const ITEM_TYPES_CONFIG = {
  veiculos: {
    title: 'Adicionar veículos',
    subtitle: 'Selecione um ou mais veículos',
    singularLabel: 'veículo',
    pluralLabel: 'veículos',
    displayFormat: (count) => (count > 1
      ? `${count} veículos adicionados`
      : '1 veículo selecionado'),
    placeholder: 'Buscar veículo ou MVSA',
    allItemsText: 'Todos os veículos',
    allTagsText: 'veículos adicionados',
    showIcon: true,
    showBrand: true,
    label: null,
  },
  concessionarias: {
    title: 'Adicionar concessionárias',
    subtitle: 'Adicione uma ou mais concessionárias abaixo',
    singularLabel: 'concessionária',
    pluralLabel: 'concessionárias',
    displayFormat: (count) => (count > 1
      ? `${count} concessionárias adicionadas`
      : '1 concessionária adicionada'),
    placeholder: 'Buscar concessionária',
    allItemsText: 'Todas as concessionárias',
    allTagsText: 'concessionárias adicionadas',
    showIcon: false,
    showBrand: true,
    label: 'Concessionária',
  },
};
