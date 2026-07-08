/* eslint-env jest */
import * as selectors from './authSelectors';
import { permissions } from '../permissions';

describe('Auth redux selectors', () => {
  it('should not crash if empty store', () => {
    const state = {
      user: null,
    };

    const isAuth = selectors.isAuthenticated(state);
    const perm = selectors.getPermissions(state);

    expect(isAuth).toEqual(false);
    expect(perm).toEqual([]);
  });

  it('isFidis: should return false', () => {
    const state = {
      user: { companies: null },
    };

    const perm = selectors.isFidis(state);

    expect(perm).toBeFalsy();
  });

  it('isFidis: should return true', () => {
    const state = {
      user: {
        dealers: [],
        companies: [{
          companyId: 'FIDIS',
          permissions: [{ permissionId: permissions.visualizarDuplicatas }],
        }],
      },
    };

    const perm = selectors.isFidis(state);

    expect(perm).toBeTruthy();
  });

  describe('getPermissions', () => {
    it('should return [] if no permission', () => {
      const state = {
        user: {},
      };

      const perms = selectors.getPermissions(state);

      expect(perms).toEqual([]);
    });

    it('should return permissions from FIDIS', () => {
      const state = {
        user: {
          companies: [{
            companyId: 'FIDIS',
            permissions: [{ permissionId: 'p1' }, { permissionId: 'p2' }],
          }, {
            companyId: 'NOT_FIDIS',
            permissions: [{ permissionId: 'p3' }],
          }],
        },
      };

      const perms = selectors.getPermissions(state);

      expect(perms.length).toEqual(2);
      expect(perms[0]).toEqual('p1');
      expect(perms[1]).toEqual('p2');
    });
  });
});
