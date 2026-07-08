/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import MultipleSelect from '../multipleSelect/multipleSelect';
import Select from './select';

import './select.stories.scss';

storiesOf('common/Select', module)
  .add('Select example', () => (<SelectStorie />));

const items = [
  { value: null, text: 'Todas as brands' },
  { value: 'jeep', text: 'Jeep' },
  { value: 'fiat', text: 'Fiat' },
  { value: 'chrysler', text: 'Chrysler' },
  { value: 'dodge', text: 'Dodge' },
];

const SelectStorie = () => {
  const [text, setText] = useState('default');
  const [brand, setBrand] = useState([]);
  return (
    <>
      <Select
        value={text || ''}
        label="Marca"
        onSelect={(a) => { setText(a); }}
        className="staff-select-storybook"
        defaultObject={{ value: 'default', text: 'Selecione uma marca' }}
        items={items}
      />
      <div style={{ width: '300px' }}>
        <MultipleSelect
          value={brand}
          onSelect={(a) => { setBrand(a); }}
          items={items}
        />
      </div>
    </>
  );
};
