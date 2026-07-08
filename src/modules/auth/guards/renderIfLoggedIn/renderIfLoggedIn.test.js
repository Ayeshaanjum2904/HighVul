/* eslint-env jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RenderIfLoggedIn from './renderIfLoggedIn';

Enzyme.configure({ adapter: new Adapter() });

describe('<RenderIfLoggedIn />', () => {
  test('Is logged in', () => {
    const wrapper = shallow(
      <RenderIfLoggedIn isAuthenticated>
        <div className="children" />
        <div className="children" />
      </RenderIfLoggedIn>,
    );

    expect(wrapper.find('.children').length).toBe(2);
  });

  test('Is NOT logged in', () => {
    const wrapper = shallow(
      <RenderIfLoggedIn isAuthenticated={false}>
        <div className="children" />
        <div className="children" />
      </RenderIfLoggedIn>,
    );

    expect(wrapper.find('.children').length).toBe(0);
  });
});
