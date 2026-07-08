/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import SingleDatePicker from './datePickerDialog';

import './datePickerDialog.stories.scss';

storiesOf('common/controls/singleDatePicker', module)
  .add('SingleDatePickerStorie example', () => (<SingleDatePickerStorie />));

const SingleDatePickerStorie = () => {
  const [text, setText] = useState(null);
  return (
    <div className="single-date-picker-storybook">
      <SingleDatePicker
        date={text}
        title="Início de vigência"
        setDate={(a) => { setText(a); }}
      />
    </div>
  );
};
