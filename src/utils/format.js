import _ from 'lodash';
import Moment from 'moment';
import 'moment/locale/pt-br';
import { statusLimitesMap, statusPedidosMap } from './statusMap';

export const safeConcat = (s1, s2) => ((s1 && s2) ? (`${s1 || ''}${s2 || ''}`) : '');

export const formatMvsa = (modelo, versao, serie, allestimento) => {
  const base = `${modelo || '???'}-${versao || '???'}-${serie || '?'}`;
  return allestimento ? `${base}-${allestimento}` : base;
};

export const formatPctg = (pctg, digits) => {
  if (!_.isNumber(pctg)) {
    return '-- %';
  }

  if (_.isNumber(digits)) {
    return `${pctg.toFixed(digits)} %`;
  }

  return `${pctg} %`;
};

export const formatCodigoConcessionaria = (number) => {
  if (number) {
    let string = number.toString();
    if (string.includes('-')) {
      string = string.replace('-', '');
    }
    if (string.length >= 4) {
      return (`${string.slice(0, -1)}-${string.split('').pop()}`);
    }
    return string;
  }
  return '';
};

export const formatCnpj = (cnpj) => {
  if (cnpj) {
    const string = cnpj.toString();
    if (string.length === 14) {
      return (`${string.slice(0, 2)}.${string.slice(2, 5)}.${string.slice(5, 8)}/${string.slice(8, 12)}.${string.slice(12, 14)}`);
    }
    return string;
  }
  return '';
};

export const formatModalidade = (desconto, parcelas, prazo, taxa) => `Financiado • ${desconto || ''}% desconto • ${parcelas || ''}x em ${prazo || ''} dias com taxa de ${taxa}% a.m`;

export const formatDescVeiculo = (string) => string?.toLowerCase().replace(/(\b[0-9][x][0-9])|(\b[m][y])|(\b\s[a-z](?=[a-z][a-z]\s))|(\b[0-9][0-9][v])/g, (s) => s.toUpperCase());

export const formatNomeConcessionaria = (string) => string?.toLowerCase().replace(/(\b[a-z][a-z]\s)|(\b[a-z](?=[a-z-]))/g, (s) => s.toUpperCase()).replace(/(\b[Dd][Ee](?=[\s]))/g, (s) => s.toLowerCase());

export const formatDate = (date, formatStr = null) => {
  if (_.isDate(date) && !formatStr) {
    return (date?.toLocaleDateString());
  }

  if (_.isDate(date) && formatStr) {
    const momentObj = new Moment(date);
    return momentObj.format(formatStr).replace(/(\b\s[a-z](?=[a-z][a-z]\s))/g, (s) => s.toUpperCase());
  }

  if (_.isString(date) && formatStr && date.length > 9) {
    const [year, month, day, hour = 0, minute = 0, second = 0] = date.split(/[/:\-T]/);
    const momentObj = new Moment(new Date(year, month - 1, day, hour, minute, second));
    return momentObj.format(formatStr);
  }

  if (_.isString(date) && formatStr) {
    const [day, month, year] = date.split('/');
    const momentObj = new Moment(new Date(year, month - 1, day));
    return momentObj.format(formatStr);
  }

  if (Moment.isMoment(date) && formatStr) {
    return date.locale('pt').format(formatStr).replace(/(\b[a-z](?=[a-z][a-z]))/g, (s) => s.toUpperCase());
  }

  return '';
};

export const formatHour = (hour, formatStr = null) => {
  if (_.isDate(hour) && !formatStr) {
    return (hour?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }
  if (_.isString(hour) && formatStr) {
    const momentObj = new Moment(new Date(hour));
    return momentObj.format(formatStr);
  }
  return '';
};

export const camelFormat = (value, length = 0) => value
  ?.toLowerCase()
  ?.split(' ')
  ?.map((word) => (word.length > length ? word.charAt(0).toUpperCase() + word.slice(1) : word))
  ?.join(' ');

export const capitalize = (value, length = 0) => value
  ?.split(' ')
  ?.map((word) => (word.length > length ? word.charAt(0).toUpperCase() + word.slice(1) : word))
  ?.join(' ');

export const getPercent = (value, total) => (
  total > 0 ? Math.round(10000 * (value / total)) / 100 : 0
);

export const formatNomePessoa = (nome) => {
  if (!nome) return '';

  const conectores = ['da', 'de', 'do', 'das', 'dos', 'e'];
  const palavrasMinusculas = nome.toLowerCase().split(' ');

  const listaPalavrasFormatadas = palavrasMinusculas.map((palavra) => {
    if (conectores.includes(palavra)) return palavra;

    const primeiraLetra = palavra.charAt(0);
    const restantePalavra = palavra.slice(1);

    return primeiraLetra.toUpperCase() + restantePalavra;
  });

  return listaPalavrasFormatadas.join(' ');
};

export const formatTelefone = (tel) => {
  let telefone = tel.replace(/\D/g, '');
  telefone = tel.replace(/^0/, '');

  if (tel?.length <= 10) {
    return telefone.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*/, '($1) $2-$3');
  }
  return telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
};

export const formatBrandName = (brandReceive) => {
  if (brandReceive === 'FIAT_COM_FUNDO') {
    return 'Fiat com fundo';
  }
  if (brandReceive === 'FIAT_SEM_FUNDO') {
    return 'Fiat sem fundo';
  }
  return brandReceive;
};

const meses = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
];

export const formatDateExtend = (date) => {
  const data = new Date(date);
  return `${data.getDate()} ${meses[data.getMonth()]} ${data.getFullYear()}`;
};

export const formatValue = (value) => {
  const formattedValue = value?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formattedValue;
};

export const formatCurrency = (value) => {
  if (!value) return '';

  if (typeof value === 'string' && value.includes('R$')) {
    return value;
  }

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formattedValue;
};

export const formatStatusLimite = (status) => statusLimitesMap[status] || status;

export const formatStatusPedido = (status) => statusPedidosMap[status] || status;

export const obterItensConcessionaria = (dados) => [
  { chave: 'Liberado no comitê', valor: formatDate(dados?.dataAprovacao, 'DD/MM/YYYY') },
  { chave: 'Concessionária', valor: dados?.nomeDealer },
  { chave: 'CNPJ', valor: formatCnpj(dados?.cnpj) },
  { chave: 'Cód. regional', valor: dados?.codigoRegional },
  { chave: 'Regional', valor: dados?.nomeRegional },
];

export const obterItensProduto = (dados) => [
  { chave: 'Código buc', valor: formatCodigoConcessionaria(dados?.codDealer) },
  { chave: 'Produto', valor: dados?.descricaoProduto },
  { chave: 'Limite total aprovado', valor: formatValue(dados?.valorLimite) },
  { chave: 'Vencimento', valor: formatDate(dados?.dataVencimento, 'DD/MM/YYYY') },
  { chave: 'Status', valor: formatStatusLimite(dados?.statusLimite) },
];

export const formatDadosInfoModal = (dados) => ({
  itensConcessionaria: obterItensConcessionaria(dados),
  itensProduto: obterItensProduto(dados),
});
