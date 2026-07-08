export const adicionarTaxaCadastrada = (taxasCadastradas, novaTaxa) => {
  taxasCadastradas.push(novaTaxa);
  return taxasCadastradas;
};

export const formatDate = (date) => date?.format('YYYY-MM-DD').concat('T00:00:00.000Z');
