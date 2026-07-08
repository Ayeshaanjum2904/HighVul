/* eslint-disable no-param-reassign */
import { formatModalidade } from 'utils/format';
import { applyProperty } from 'utils/object';

export const createMenuItems = (detalhePedido) => {
  const menuItems = [];
  (detalhePedido?.condicoes || []).forEach((condicao) => {
    let texto;
    if (condicao?.id === null) {
      texto = 'Condição À Vista';
    } else if (condicao.negociada === true && condicao?.id === -1) {
      texto = 'Condicação Negociada';
    } else {
      texto = formatModalidade(
        condicao.percentualFinanciado ?? condicao.percentualDesconto,
        condicao.parcelas,
        condicao.vencimento,
        condicao.taxa,
      );
    }
    menuItems.push({
      value: condicao?.id ?? 'null',
      text: texto,
    });
  });
  return menuItems;
};

export const updateCondicaoSelecionada = (obj, condicao) => {
  const index = obj.condicoes.findIndex((c) => c.id === condicao?.value || (c.id === null && condicao?.value === 'null'));
  if ((condicao?.value === -1 && obj.condicoes[index].negociada === true)
  || (obj?.condicoes[index].negociada === true)) { // negociada padrao
    obj.condicaoNegociadaId = condicao?.value;
    obj.condicaoComercialId = null;
    obj.isAVista = false;
  } else if (condicao?.value === 'null') { // À Vista
    obj.condicaoNegociadaId = null;
    obj.condicaoComercialId = null;
    obj.isAVista = true;
  } else { // Condicao Veiculo
    obj.condicaoNegociadaId = null;
    obj.condicaoComercialId = condicao?.value;
    obj.isAVista = false;
  }
  return obj;
};

export const setCondicaoSelecionadaInicial = (detalhePedido) => {
  if (detalhePedido?.condicaoComercialId == null && detalhePedido?.condicaoNegociadaId == null) return 'null';
  return detalhePedido?.condicaoComercialId ?? detalhePedido?.condicaoNegociadaId;
};

export const isCondicaoNegociada = (condicao) => {
  if (condicao?.value === -1) return true;
  return false;
};

export const applyCondicaoComercialProperty = (condicoes, propertyName, value, id) => {
  const index = condicoes.findIndex((c) => c.id === id);

  const newObj = ({}, condicoes[index]);
  condicoes[index] = applyProperty(newObj, propertyName, value);

  return condicoes;
};

export const addComentario = (comentarios, conteudo) => {
  const newObj = ({}, comentarios);

  const comentario = {
    data: new Date(),
    tipo: 'comentario_usuario',
    conteudo,
  };

  newObj.push(comentario);
  return [...newObj];
};
