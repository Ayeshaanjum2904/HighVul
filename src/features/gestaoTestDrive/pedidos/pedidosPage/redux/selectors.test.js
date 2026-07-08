/* eslint-env jest */
import _ from 'lodash';

import selectors from './selectors';

describe('PedidosPage selectors', () => {
  it('gruposPedidos - cenario 1', () => {
    const pedidos = [
      { id: 1, status: 'analise_credito' },
      { id: 2, status: 'financiamento_revisao' },
      { id: 3, status: 'analise_credito' },
    ];
    const state = {
      pedidosList: { pedidos },
    };

    const groups = selectors.gruposPedidos(state);

    expect(_.isArray(groups)).toEqual(true);
    expect(groups.length).toEqual(2);
    expect(groups[0].pedidos.length).toEqual(2);
    expect(groups[0].pedidos[0].status).toEqual('analise_credito');
    expect(groups[0].pedidos[0].id).toEqual(1);
    expect(groups[0].pedidos[1].id).toEqual(3);
    expect(groups[1].pedidos[0].status).toEqual('financiamento_revisao');
    expect(groups[1].pedidos[0].id).toEqual(2);
  });

  it('gruposPedidos - preserva ordem da lista', () => {
    const pedidos = [
      { id: 1, status: 'status_1' },
      { id: 2, status: 'status_1' },
      { id: 3, status: 'status_2' },
      { id: 4, status: 'status_2' },
    ];

    const groups = selectors.gruposPedidos({ pedidosList: { pedidos } });

    expect(groups.length).toEqual(2);
    expect(groups[0].label).toEqual('status_1');
    expect(groups[1].label).toEqual('status_2');

    const pedidosReversed = [
      { id: 4, status: 'status_2' },
      { id: 3, status: 'status_2' },
      { id: 2, status: 'status_1' },
      { id: 1, status: 'status_1' },
    ];
    const groupsReversed = selectors.gruposPedidos({ pedidosList: { pedidos: pedidosReversed } });

    expect(groupsReversed.length).toEqual(2);
    expect(groupsReversed[0].label).toEqual('status_2');
    expect(groupsReversed[1].label).toEqual('status_1');
  });
});
