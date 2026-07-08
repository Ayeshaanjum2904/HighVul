/* eslint-env jest */
import { permissions } from './permissions';
import {
  definePermissions, hasPermission, hasPermissions, hasSomePermission,
} from './authLogic';

describe('/modules/auth', () => {
  describe('definePermissions', () => {
    it('given dealer has VISUALIZAR_DUPLICATAS then visualizarDuplicatas is granted', () => {
      const user = {
        companies: [{
          companyId: 'FIDIS',
          permissions: [
            { permissionId: 'VISUALIZAR_DUPLICATAS' },
          ],
          profiles: [],
        }],
      };

      const perms = definePermissions(user);

      expect(perms.visualizarDuplicatas).toEqual(true);
    });

    it('given dealer does not have VISUALIZAR_DUPLICATAS then visualizarDuplicatas is not granted', () => {
      const user = {
        companies: [{
          companyId: 'FIDIS',
          permissions: [
            { permisisonId: 'OUTRA_PERMISSAO' },
          ],
          profiles: [],
        }],
      };

      const perms = definePermissions(user);

      expect(perms.visualizarDuplicatas).toEqual(false);
    });
  });

  describe('hasPermission', () => {
    it('definePermissions: FIDIS user', () => {
      const user = {
        dealers: [],
        companies: [{
          companyId: 'FIDIS',
          permissions: [{ permissionId: permissions.visualizarDuplicatas }],
        }],
      };

      const permissionDuplicatas = hasPermission(user, permissions.visualizarDuplicatas);
      expect(permissionDuplicatas).toEqual(true);

      const permissionPagamento = hasPermission(user, permissions.efetuarPagamento);
      expect(permissionPagamento).toEqual(false);
    });
  });

  describe('hasPermissions', () => {
    it('returns true if has permissions', () => {
      const userPerms = ['P1', 'P2', 'P3'];
      const requiredPerms = ['p1', 'p2'];

      const res = hasPermissions(userPerms, requiredPerms);

      expect(res).toEqual(true);
    });

    it('returns false if lacks one permission', () => {
      const userPerms = ['P1', 'P2', 'P3'];
      const requiredPerms = ['p1', 'p_not'];

      const res = hasPermissions(userPerms, requiredPerms);

      expect(res).toEqual(false);
    });
  });

  describe('hasSomePermission', () => {
    it('returns true if has some of the required permissions', () => {
      const userPerms = ['P1', 'P2', 'P3'];
      const requiredPerms = ['p_not', 'p1'];

      const res = hasSomePermission(userPerms, requiredPerms);

      expect(res).toEqual(true);
    });

    it('returns false if none of the required permissions present', () => {
      const userPerms = ['P1', 'P2', 'P3'];
      const requiredPerms = ['p_not'];

      const res = hasSomePermission(userPerms, requiredPerms);

      expect(res).toEqual(false);
    });
  });
});
