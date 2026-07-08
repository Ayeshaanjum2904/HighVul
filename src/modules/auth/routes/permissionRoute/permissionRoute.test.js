/* eslint-env jest */
import React from 'react';

import PermissionRoute from './permissionRoute';

const children = () => (<div>Hello World</div>);

describe('<PermissionRoute />', () => {
  it('requireAll: renders nothing if no props', () => {
    const res = PermissionRoute({
      children,
      permissions: ['p1', 'p2'],
    });

    expect(res).toBeNull();
  });

  it('requireAll: renders nothing if permission not present', () => {
    const res = PermissionRoute({
      children,
      permissions: ['p1', 'p2'],
      requireAll: ['p3'],
    });

    expect(res).toBeNull();
  });

  it('requireAll: renders if permission present', () => {
    const res = PermissionRoute({
      children,
      permissions: ['p1', 'perm2'],
      requireAll: ['P1', 'PERM2'],
    });

    expect(res).not.toBeNull();
  });

  it('requireAny: renders if any permission present', () => {
    const res = PermissionRoute({
      children,
      permissions: ['p1', 'p2'],
      requireAny: ['p1', 'p3'],
    });

    expect(res).not.toBeNull();
  });

  it('mix requireAll and requireAny - has permissions', () => {
    const res = PermissionRoute({
      children,
      permissions: ['p1', 'p2', 'p3'],
      requireAll: ['p1', 'p3'],
      requireAny: ['p1', 'p_not'],
    });

    expect(res).not.toBeNull();
  });

  it('mix requireAll and requireAny - lacks permission', () => {
    const res = PermissionRoute({
      children,
      permissions: ['p1', 'p2', 'p3'],
      requireAll: ['p1', 'p_not'],
      requireAny: ['p2'],
    });

    expect(res).toEqual(null);
  });
});
