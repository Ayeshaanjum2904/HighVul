/* eslint-env jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Mixpanel } from '../../../modules';

import MenuItem from './menuItem';
import FilesIcon from '../../../assets/icons/files';

Enzyme.configure({ adapter: new Adapter() });

describe('Menu Item', () => {
  test('render', () => {
    Mixpanel.init();
    const onClickMock = jest.fn();
    Mixpanel.init();
    const wrapper = shallow(
      <MenuItem
        title="RANDOM"
        Icon={FilesIcon}
        isActive
        onClick={onClickMock}
      />,
    );
    expect(wrapper.exists()).toBe(true);
  });

  test('click', () => {
    const onClickMock = jest.fn();
    Mixpanel.init();
    const wrapper = shallow(
      <MenuItem
        title="RANDOM"
        Icon={FilesIcon}
        isActive
        onClick={onClickMock}
      />,
    );
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });

  test('snapshot', () => {
    const onClickMock = jest.fn();
    Mixpanel.init();
    const wrapper = shallow(
      <MenuItem
        title="RANDOM"
        Icon={FilesIcon}
        isActive
        onClick={onClickMock}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
