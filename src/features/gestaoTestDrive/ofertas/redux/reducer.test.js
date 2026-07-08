/* eslint-env jest */
import reducer from './reducer';
import actions from './actions';

describe('Ofertas reducer', () => {
  describe('get ofertas', () => {
    it('start', () => {
      const initialState = {
        ofertas: {
          isLoading: false,
          isError: null,
          isSuccess: null,
          ofertas: [],
        },
      };

      const res = reducer(initialState, actions.getOfertasStart());

      expect(res.ofertas.isLoading).toBe(true);
    });

    it('success', () => {
      const initialState = {
        ofertas: {
          isLoading: false,
          isError: null,
          isSuccess: null,
          ofertas: [],
        },
      };
      const ofertas = [{ oferta: '1' }, { oferta: '2' }];

      const res = reducer(initialState, actions.getOfertasSuccess(ofertas));

      expect(res.ofertas.isSuccess).toBe(true);
      expect(res.ofertas.ofertas).toBe(ofertas);
    });

    it('error', () => {
      const initialState = {
        ofertas: {
          isLoading: false,
          isError: null,
          isSuccess: null,
          ofertas: [],
        },
      };

      const res = reducer(initialState, actions.getOfertasError());

      expect(res.ofertas.isError).toBe(true);
    });
  });

  describe('page reset', () => {
    it('setProduto', () => {
      const initialState = {
        search: {
          marca: null,
          produto: null,
          data: null,
          texto: null,
          pagina: 5,
        },
      };

      const res = reducer(initialState, actions.setProduto('Test Drive'));

      expect(res.search.produto).toBe('Test Drive');
      expect(res.search.pagina).toBe(0);
    });

    it('setMarca', () => {
      const initialState = {
        search: {
          marca: null,
          produto: null,
          data: null,
          texto: null,
          pagina: 3,
        },
      };

      const res = reducer(initialState, actions.setMarca('Fiat'));

      expect(res.search.marca).toBe('Fiat');
      expect(res.search.pagina).toBe(0);
    });

    it('setData', () => {
      const initialState = {
        search: {
          marca: null,
          produto: null,
          data: null,
          texto: null,
          pagina: 5,
        },
      };

      const res = reducer(initialState, actions.setData('12/10/1200'));

      expect(res.search.data).toBe('12/10/1200');
      expect(res.search.pagina).toBe(0);
    });
  });
});
