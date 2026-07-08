const a = (type) => (type === 'a' ? 'a' : '');
const letter = (type) => a(type) || 'o';

export default (dictionary, isArray, disableCreate) => {
  const { singular, plural, type } = dictionary;
  return {
    placeholder: isArray
      ? `Selecione um${a(type)} ou mais ${plural}`
      : `Selecione um${a(type)} ${singular}`,
    searchPlaceholder: disableCreate
      ? `Buscar ${singular}`
      : `Buscar ou inserir novo ${singular}`,
    createText: `Criar nov${letter(type)} ${singular}`,
    emptyText: disableCreate
      ? [
        `Nenhum ${singular}`,
        'encontrado na lista.',
      ] : [
        `Não existem ${plural}, digite`,
        `para criar um${a(type)} nov${letter(type)} ${singular}.`,
      ],
    deleteText: [
      `Tem certeza que deseja excluir o tipo de ${singular}`,
      `da lista de ${plural}? Ao realizar essa ação não será possível selecionar esse ${singular} na lista.`,
    ],

    selectAllText: `Tod${type}s ${type}s ${plural}`,
  };
};
