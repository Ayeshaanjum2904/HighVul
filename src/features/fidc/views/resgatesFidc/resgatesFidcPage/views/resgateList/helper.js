export const getStatus = (status) => {
  if (status === 'A') return 'Ativo';
  if (status === 'F') return 'Finalizado';
  if (status === 'I') return 'Inativo';
  return '-';
};

export default null;
