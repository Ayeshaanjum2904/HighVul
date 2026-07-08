import _ from 'lodash';

const MONTADORA_FIELD_LABELS = {
  CorExterna: 'Cor Externa',
  Revestimento: 'Revestimento',
  CodigoRegional: 'Código Regional',
  EmpresaOrigemFaturamento: 'Empresa Origem Faturamento',
  CodigoConcessionariaEntrega: 'Código da Concessionária de Entrega',
  CodigoConcessionariaComissao: 'Código da Concessionária de Comissão',
};

const formatFieldLabel = (fieldName) => {
  if (!fieldName || typeof fieldName !== 'string') return '';

  if (MONTADORA_FIELD_LABELS[fieldName]) {
    return MONTADORA_FIELD_LABELS[fieldName];
  }

  return fieldName
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim();
};

export const normalizarErrosMontadora = (errors) => {
  if (_.isArray(errors)) {
    return errors;
  }

  if (!errors || typeof errors !== 'object') {
    return [];
  }

  return Object.keys(errors)
    .map((fieldName) => formatFieldLabel(fieldName))
    .filter(Boolean)
    .map((label) => ({
      type: 'invalid_property',
      message: label,
    }));
};
