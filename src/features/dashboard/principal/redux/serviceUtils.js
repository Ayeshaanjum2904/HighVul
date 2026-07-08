import { formatDateForUrl } from 'utils/axios';
import { Brands } from './enums';

export const mapToDto = (filter) => ({
  dataInicio: formatDateForUrl(filter.startDate),
  dataFim: formatDateForUrl(filter.endDate),
  marcas: (filter?.selectedBrands.map((b) => b.value) || []).includes(Brands)
    ? (filter?.selectedBrands.map((b) => b.value))
    : (filter?.selectedGrupo.map((b) => b.brand)),
  regional: (filter?.selectedRegional.map((b) => b.value)),
  modelos: (filter?.selectedModelos.map((b) => b.value)),
  grupo: (filter?.selectedGrupo.map((b) => b.codigoBuc)),
  buc: (filter?.selectedPonto.map((p) => p.value)),
});
