/* eslint-env jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RenderIfNotFidis from './renderIfNotFidis';

Enzyme.configure({ adapter: new Adapter() });

describe('<RenderIfNotFidis />', () => {
  test('Is fidis', () => {
    const wrapper = shallow(
      <RenderIfNotFidis isFidis>
        <div className="children" />
        <div className="children" />
      </RenderIfNotFidis>,
    );

    expect(wrapper.find('.children').length).toBe(0);
  });

  test('Is NOT fidis', () => {
    const wrapper = shallow(
      <RenderIfNotFidis isFidis={false}>
        <div className="children" />
        <div className="children" />
      </RenderIfNotFidis>,
    );

    expect(wrapper.find('.children').length).toBe(2);
  });
});
