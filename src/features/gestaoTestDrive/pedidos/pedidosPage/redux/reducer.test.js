/* eslint-env jest */
import actions from './actions';
import reducer from './reducer';

describe('PedidosPage reducer', () => {
  describe('get pedidos', () => {
    it('start', () => {
      const initialState = {
        pedidosList: {
          isLoading: false,
          isError: true,
          pedidos: [{ name: 'pedido_antigo_1' }],
        },
      };

      const result = reducer(initialState, actions.getPedidosStart());

      expect(result.pedidosList.isLoading).toEqual(true);
      expect(result.pedidosList.isError).toEqual(false);
      expect(result.pedidosList.pedidos).toEqual(null);
    });

    it('success', () => {
      const initialState = {
        pedidosList: {
          isLoading: true,
          isError: false,
          pedidos: null,
        },
      };

      const pedidosNovos = [{ name: 'p1' }, { name: 'p2' }];
      const pageParams = {
        page: 1,
        totalItems: 10,
      };

      const result = reducer(initialState, actions.getPedidosSuccess(pedidosNovos, pageParams));

      expect(result.pedidosList.isLoading).toEqual(false);
      expect(result.pedidosList.isError).toEqual(false);
      expect(result.pedidosList.pedidos).toEqual(pedidosNovos);
    });

    it('error', () => {
      const initialState = {
        pedidosList: {
          isLoading: true,
          isError: false,
          pedidos: [],
        },
      };

      const result = reducer(initialState, actions.getPedidosError());

      expect(result.pedidosList.isLoading).toEqual(false);
      expect(result.pedidosList.isError).toEqual(true);
      expect(result.pedidosList.pedidos).toEqual(null);
    });
  });
});
