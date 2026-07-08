import { createSelector } from 'reselect';
import selectors from '../../limitesAprovadosPage/redux/selectors';

const perfilList = createSelector(
  selectors.permissionList,
  (permissions) => {
    const profiles = [];
    if (permissions.isGestaoCadastro) profiles.push({ value: 'cadastro', text: 'Cadastro' });
    if (permissions.isGestaoCredito) profiles.push({ value: 'credito', text: 'Crédito' });
    if (permissions.isGestaoFinanciamentoRede) profiles.push({ value: 'financiamento', text: 'Finan. Rede' });
    if (permissions.isGestaoJuridico) profiles.push({ value: 'juridico', text: 'Jurídico' });

    return profiles;
  },
);

export default {
  perfilList,
};
