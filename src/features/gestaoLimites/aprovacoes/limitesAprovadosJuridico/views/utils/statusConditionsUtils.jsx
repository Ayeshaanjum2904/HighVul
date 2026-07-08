import _ from 'lodash';

function isDocusign(doc) { return doc?.tipoEnvioDocumento.includes('docusign'); }
function isDocOriginal(doc) { return doc?.tipoEnvioDocumento.includes('enviar_doc_original'); }
function isAnexoDealer(doc) { return doc?.tipoEnvioDocumento.includes('anexo_do_dealer'); }
function isCheckEmpty(doc) { return _.isEmpty(doc?.tipoEnvioDocumento); }

export function noneAnexosDocComplementares(listaDocsComplementares) {
  return listaDocsComplementares.every(
    (doc) => doc?.documentoPendente.every((arq) => !arq.documentoId),
  );
}

export function hasDocComplementaresWithAnexo(listaDocsComplementares) {
  return listaDocsComplementares.some(
    (doc) => doc?.documentoPendente.some((arq) => arq.documentoId),
  );
}

export function hasDocComplementaresWithoutAnexo(listaDocsComplementares) {
  return listaDocsComplementares.some(
    (doc) => doc?.documentoPendente.some((arq) => !arq.documentoId),
  );
}

export function allDocComplementaresHasAnexos(listaDocsComplementares) {
  return listaDocsComplementares?.length > 0 && listaDocsComplementares.every(
    (doc) => doc.documentoPendente.every((arq) => arq.documentoId),
  );
}

export function isAllDocOriginalOrSemCheck(listaDocsFormalizar) {
  return listaDocsFormalizar.every(
    (item) => (isDocOriginal(item) && !isAnexoDealer(item)) || isCheckEmpty(item),
  );
}

export function isAllDocOriginal(listaDocsFormalizar) {
  return listaDocsFormalizar.every((item) => isDocOriginal(item) && !isAnexoDealer(item));
}

export function isAllDocusign(listaDocsFormalizar) {
  return listaDocsFormalizar.every((item) => isDocusign(item));
}

export function isAllDocusignOrSemCheck(listaDocsFormalizar) {
  return listaDocsFormalizar.every((item) => isDocusign(item) || isCheckEmpty(item));
}

export function hasDocFormalizarWithoutAnexo(listaDocsFormalizar) {
  return listaDocsFormalizar.some((doc) => {
    if (isAnexoDealer(doc)) return doc.listaArquivos?.every((arq) => arq.tipo !== 'dealer');
    return false;
  });
}

export function hasDocFormalizarWithAnexo(listaDocsFormalizar) {
  return listaDocsFormalizar.some(
    (doc) => doc.listaArquivos?.some((arq) => arq.tipo === 'dealer'),
  );
}

export function allDocFormalizarHasAnexos(listaDocsFormalizar) {
  return listaDocsFormalizar.every((doc) => doc.listaArquivos?.some((arq) => arq.tipo === 'dealer'));
}
