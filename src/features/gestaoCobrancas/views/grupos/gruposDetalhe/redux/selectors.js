import { createSelector } from 'reselect';

import { camelFormat } from 'utils/format';
import { Loader } from '../../../../redux/enums';

const marcasList = createSelector(
  (state) => state?.grupos?.details?.marcas,
  (marcas) => (marcas || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.marca)}`,
  })),
);

const regionaisList = createSelector(
  (state) => state?.grupos?.details?.regionais,
  (regionais) => (regionais || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.regional, 2)}`,
  })),
);

const papeisList = createSelector(
  (state) => state?.grupos?.details?.updateContato?.papeis,
  (papeis) => (papeis || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.descricao, 2)}`,
  })),
);

const isLoading = {
  dados: createSelector(
    (state) => state?.grupos?.details?.dataLoader,
    (loader) => (loader || []).some((l) => l.isLoading === true
                                        && l.id === Loader.detalheGrupo),
  ),
  concessionarias: createSelector(
    (state) => state?.grupos?.details?.dataLoader,
    (loader) => (loader || []).some((l) => l.isLoading === true
                                        && l.id === Loader.concessionariasGrupo),
  ),
  contatos: createSelector(
    (state) => state?.grupos?.details?.dataLoader,
    (loader) => (loader || []).some((l) => l.isLoading === true
                                        && l.id === Loader.contatosGrupo),
  ),
  historico: createSelector(
    (state) => state?.grupos?.details?.dataLoader,
    (loader) => (loader || []).some((l) => l.isLoading === true
                                        && l.id === Loader.historicoGrupo),
  ),
};

const isError = {
  dados: createSelector(
    (state) => state?.grupos?.details?.dataLoader,
    (loader) => (loader || []).some((l) => l.isError === true
                                        && l.id === Loader.detalheGrupo),
  ),
  concessionarias: createSelector(
    (state) => state?.grupos?.details?.dataLoader,
    (loader) => (loader || []).some((l) => l.isError === true
                                        && l.id === Loader.concessionariasGrupo),
  ),
  contatos: createSelector(
    (state) => state?.grupos?.details?.dataLoader,
    (loader) => (loader || []).some((l) => l.isError === true
                                        && l.id === Loader.contatosGrupo),
  ),
  historico: createSelector(
    (state) => state?.grupos?.details?.dataLoader,
    (loader) => (loader || []).some((l) => l.isError === true
                                        && l.id === Loader.historicoGrupo),
  ),
};

const select = {
  razaoSocial: createSelector(
    (state) => state?.grupos?.details?.grupo?.razaoSocial,
    (state) => state?.grupos?.details?.updateGrupo?.data?.razaoSocial,
    (value, newValue) => (newValue ?? value),
  ),
  nomeConta: createSelector(
    (state) => state?.grupos?.details?.grupo?.nomeConta,
    (state) => state?.grupos?.details?.updateGrupo?.data?.nomeConta,
    (value, newValue) => (newValue ?? value),
  ),
  cnpj: createSelector(
    (state) => state?.grupos?.details?.grupo?.cnpj,
    (state) => state?.grupos?.details?.updateGrupo?.data?.cnpj,
    (value, newValue) => (newValue ?? value),
  ),
  marca: createSelector(
    (state) => state?.grupos?.details?.grupo?.marcaId,
    (state) => state?.grupos?.details?.updateGrupo?.data?.marcaId,
    (value, newValue) => (newValue ?? value),
  ),
  regional: createSelector(
    (state) => state?.grupos?.details?.grupo?.regionalId,
    (state) => state?.grupos?.details?.updateGrupo?.data?.regionalId,
    (value, newValue) => (newValue ?? value),
  ),
  emailSupervisor: createSelector(
    (state) => state?.grupos?.details?.grupo?.emailSupervisor,
    (state) => state?.grupos?.details?.updateGrupo?.data?.emailSupervisor,
    (value, newValue) => (newValue ?? value),
  ),
  analistaRede: createSelector(
    (state) => state?.grupos?.details?.grupo?.analistaRede,
    (state) => state?.grupos?.details?.updateGrupo?.data?.analistaRede,
    (value, newValue) => (newValue ?? value),
  ),
  inscMunicipal: createSelector(
    (state) => state?.grupos?.details?.grupo?.inscricaoMunicipal,
    (state) => state?.grupos?.details?.updateGrupo?.data?.inscricaoMunicipal,
    (value, newValue) => (newValue ?? value),
  ),
  inscEstadual: createSelector(
    (state) => state?.grupos?.details?.grupo?.inscricaoEstadual,
    (state) => state?.grupos?.details?.updateGrupo?.data?.inscricaoEstadual,
    (value, newValue) => (newValue ?? value),
  ),
};

const formatContatos = createSelector(
  (state) => state?.grupos?.details?.updateContato?.contatos,
  (contatos) => (contatos || []).map((c) => ({
    text: c.nome,
    value: c.id,
  })),
);

const buttonTitle = createSelector(
  (state) => state?.grupos.details.updateContato.data.id,
  (id) => (id === null
    ? ''
    : 'Concluir'),
);

const modalInfo = createSelector(
  (state) => state?.grupos.details.updateContato.data.id,
  (id) => (id === null
    ? {
      title: 'Novo contato',
      subtitle: 'Preencha os dados para a criação do contato',
    }
    : {
      title: 'Editar contato',
      subtitle: 'Para editar, altere os dados desejados e clique em concluir',
    }),
);

const isButtonEnabled = createSelector(
  (state) => state?.grupos.details.updateContato.data,
  (contato) => (!contato.nome || !contato.telefone
             || !contato.email || !contato.papel.id),
);

export default {
  marcasList,
  regionaisList,
  isLoading,
  isError,
  select,
  formatContatos,
  papeisList,
  isButtonEnabled,
  modalInfo,
  buttonTitle,
};
