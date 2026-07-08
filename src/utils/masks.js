import { IMask } from 'react-imask';

export const getUnmaskedInput = (value) => value.replace(/\.|-|_|\//g, '');

const FORMATO_CPF = 'XXX.XXX.XXX-XX';
const FORMATO_CNPJ = 'SS.SSS.SSS/SSSS-XX';

export const MASK_CPF = {
  mask: FORMATO_CPF,
  blocks: {
    X: { mask: /^[0-9]$/ },
  },
};

export const MASK_CNPJ = {
  mask: FORMATO_CNPJ,
  prepareChar: (str) => str.toUpperCase(),
  blocks: {
    S: {
      mask: /^[a-zA-Z0-9]$/,
    },
    X: {
      mask: /^[0-9]$/,
    },
  },
};

const mask = IMask.createMask({
  mask: [
    MASK_CPF,
    MASK_CNPJ,
  ],
});

export const maskToCPFOrCNPJ = (value) => {
  mask.resolve(value);
  return mask.value;
};
