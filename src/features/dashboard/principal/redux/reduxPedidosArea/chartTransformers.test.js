/* eslint-env jest */
import * as ChartTransformers from './chartTransformers';

describe('dashboard pedidos x area transform', () => {
  describe('transform', () => {
    it('transform the data', () => {
      const initialState = [{
        etapa: 'faturamento',
        label: 'Faturamento',
        totalConvencional: 65,
        totalAdicional: 2,
        totalExcepcional: 2,
      },
      {
        etapa: 'Separação',
        label: 'Separação',
        totalConvencional: 59,
        totalAdicional: 2,
        totalExcepcional: 2,
      }, {
        etapa: 'Revisão',
        label: 'Revisão',
        totalConvencional: 80,
        totalAdicional: 2,
        totalExcepcional: 2,
      }, {
        etapa: 'Crédito',
        label: 'Crédito',
        totalConvencional: 0,
        totalAdicional: 10,
        totalExcepcional: 105,
      }, {
        etapa: 'Comercial',
        label: 'Comercial',
        totalConvencional: 56,
        totalAdicional: 2,
        totalExcepcional: 42,
      }];

      const resultLabel = ChartTransformers.transformPedidosArea(initialState, null);
      expect(resultLabel).toMatchObject({
        labels: ['Faturamento', 'Separação', 'Revisão', 'Crédito', 'Comercial'],
        datasets: [
          {
            label: 'Convencional',
            data: [65, 59, 80, 0, 56],
          },
          {
            label: 'Exceção',
            data: [2, 2, 2, 105, 42],
          },
          {
            label: 'Adicional',
            data: [2, 2, 2, 10, 2],
          }],
      });
    });
  });
});
