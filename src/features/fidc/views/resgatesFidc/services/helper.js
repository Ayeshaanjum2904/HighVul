import moment from 'moment';

export const getLetterStatus = (status) => {
  switch (status) {
    case 'Ativo':
      return 'A';
    case 'Inativo':
      return 'I';
    case 'Finalizado':
      return 'F';
    default:
      return null;
  }
};

export const getDateFromEvent = (date) => {
  if (date) {
    const dateFormat = moment(date, 'YYYY-MM-DD', true);
    return dateFormat.isValid() ? dateFormat : undefined;
  }
  return null;
};
