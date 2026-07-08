/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import Switch from './toggleSwitch';

storiesOf('common/controls/switch', module)
  .add('switch example', () => (<SwitchStorie />));

const SwitchStorie = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onClick={() => setChecked(!checked)}
    />
  );
};
