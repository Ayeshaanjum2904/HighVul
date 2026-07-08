const findVersions = (dealersArray) => {
  const versionsArray = [];

  dealersArray?.forEach((dealerInfo) => {
    const versaoRemovida = dealerInfo.versoes?.some((v) => v.statusSisgar === 'REMOVIDO');
    const versaoValida = dealerInfo.versoes?.find((v) => v.statusSisgar === 'VÁLIDO' || v.statusSisgar === 'REMOVIDO');
    const versoesModificadas = dealerInfo.versoes?.filter((v) => v.statusSisgar === 'MODIFICADO');

    if (versaoValida || (versoesModificadas && versoesModificadas.length > 0) || versaoRemovida) {
      const result = {
        nomeDealer: dealerInfo.nomeDealer,
        codigoRegional: dealerInfo.codigoRegional,
        nomeRegional: dealerInfo.nomeRegional,
        cnpj: dealerInfo.cnpj,
        id: versaoValida ? versaoValida.id : null,
        valorLimite: versaoValida ? versaoValida.valorLimite : null,
        condicao: versaoValida ? versaoValida.condicao : null,
        dataReferencia: versaoValida ? versaoValida.dataReferencia : null,
        dataVencimento: versaoValida ? versaoValida.dataVencimento : null,
        statusSisgar: versaoValida ? versaoValida.statusSisgar : null,
        idLimite: dealerInfo.idLimite,
        codDealer: dealerInfo.codDealer,
        descricaoProduto: dealerInfo.descricaoProduto,
        dataAprovacao: dealerInfo.dataAprovacao,
        statusLimite: dealerInfo.statusLimite,
        isChecked: false,
        versaoRemovida,
        documento: dealerInfo.documento,
        tipoLimite: dealerInfo.tipoLimite,
        modificados: [],
        isAceitaDealer: dealerInfo.aceitaDealer,
        isLimiteJustificado: dealerInfo.limiteJustificado,
        isLiberadoDealer: dealerInfo.liberadoDealer,
      };

      versoesModificadas?.forEach((versaoModificada) => {
        const camposModificados = [];

        if (versaoModificada.valorLimite !== (versaoValida ? versaoValida.valorLimite : null)) {
          camposModificados.push('valorLimite');
        }

        if (versaoModificada.condicao !== (versaoValida ? versaoValida.condicao : null)) {
          camposModificados.push('condicao');
        }

        if (versaoModificada.dataVencimento
          !== (versaoValida ? versaoValida.dataVencimento : null)) {
          camposModificados.push('dataVencimento');
        }

        result.modificados.push({
          nomeDealer: dealerInfo.nomeDealer,
          codigoRegional: dealerInfo.codigoRegional,
          nomeRegional: dealerInfo.nomeRegional,
          cnpj: dealerInfo.cnpj,
          id: versaoModificada.id,
          valorLimite: versaoModificada.valorLimite,
          condicao: versaoModificada.condicao,
          dataReferencia: versaoModificada.dataReferencia,
          dataVencimento: versaoModificada.dataVencimento,
          statusSisgar: versaoModificada.statusSisgar,
          idLimite: dealerInfo.idLimite,
          codDealer: dealerInfo.codDealer,
          descricaoProduto: dealerInfo.descricaoProduto,
          dataAprovacao: dealerInfo.dataAprovacao,
          statusLimite: dealerInfo.statusLimite,
          criadoEm: versaoModificada.criadoEm,
          camposModificados,
        });
      });

      versionsArray.push(result);
    }
  });

  return versionsArray;
};

export default findVersions;
