export const getUltimaPagina = (state) => {
  const {
    totalItems,
  } = state.ofertas.ofertas;
  const {
    itensPorPagina,
  } = state.search;

  const divisao = Math.floor((totalItems || 0) / itensPorPagina);

  return (
    divisao
  );
};
