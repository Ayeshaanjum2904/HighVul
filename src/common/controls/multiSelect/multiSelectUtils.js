const ITEM_HEIGHT = 54;

export const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
export const getSufix = (dictionary) => (dictionary.type === 'a' ? 'a' : '');
export const getHeight = () => ITEM_HEIGHT;

export const getPlaceholderText = (size, selectedOptions, options, dictionary) => {
  const sufix = getSufix(dictionary);
  if (size === 1) {
    return `${size} ${dictionary.singular} selecionad${dictionary.type}`;
  }
  if (size === 0) {
    return `Selecione um${sufix} ou mais ${dictionary.plural}`;
  }
  if (selectedOptions.length === options.length) {
    return `Tod${dictionary.type}s ${dictionary.type}s ${dictionary.plural}`;
  }
  return `${size} ${dictionary.plural} selecionad${dictionary.type}s`;
};

export const getFirstOptionText = (isEmpty, dictionary) => {
  if (isEmpty) return `${capitalize(dictionary.singular)} não existente`;
  return `Tod${dictionary.type}s ${dictionary.type}s ${dictionary.plural}`;
};
