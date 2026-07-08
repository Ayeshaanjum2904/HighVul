/* eslint-env jest */
import React from 'react';

import RenderIfPermission from './renderIfPermission';

const children = () => (<div>Hello World</div>);

describe('<RenderIfPermission />', () => {
  it('requireAll: renders nothing if no props', () => {
    const res = RenderIfPermission({
      children,
      permissions: ['p1', 'p2'],
      requireAll: null,
      requireAny: null,
    });

    expect(res).toBeNull();
  });

  it('requireAll: renders nothing if permission not present', () => {
    const res = RenderIfPermission({
      children,
      permissions: ['p1', 'p2'],
      requireAll: ['p3'],
    });

    expect(res).toBeNull();
  });

  it('requireAll: renders if permission present', () => {
    const res = RenderIfPermission({
      children,
      permissions: ['p1', 'perm2'],
      requireAll: ['P1', 'PERM2'],
    });

    expect(res).toEqual(children);
  });

  it('requireAny: renders if any permission present', () => {
    const res = RenderIfPermission({
      children,
      permissions: ['p1', 'p2'],
      requireAny: ['p1', 'p3'],
    });

    expect(res).toEqual(children);
  });

  it('mix requireAll and requireAny - has permissions', () => {
    const res = RenderIfPermission({
      children,
      permissions: ['p1', 'p2', 'p3'],
      requireAll: ['p1', 'p3'],
      requireAny: ['p1', 'p_not'],
    });

    expect(res).toEqual(children);
  });

  it('mix requireAll and requireAny - lacks permission', () => {
    const res = RenderIfPermission({
      children,
      permissions: ['p1', 'p2', 'p3'],
      requireAll: ['p1', 'p_not'],
      requireAny: ['p2'],
    });

    expect(res).toEqual(null);
  });
});
