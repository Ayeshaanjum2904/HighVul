/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import GetApp from '@material-ui/icons/GetApp';

import Button from './button';

import './button.stories.scss';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => (<ButtonStory />))
  .add('All Boolean Options', () => (<AllOptionsStory />));

const ButtonStory = () => (
  <div>
    <div className="button-stories__heading">
      Button
    </div>
    <div className="button-stories__section">
      <div style={{ width: '200px' }}>
        <Button
          fullWidth
          disabled={boolean('Disabled', false)}
          isLoading={boolean('Loading', false)}
          onClick={action('click')}
        >
          {text('Label', 'Button')}
        </Button>
      </div>
    </div>

    <div className="button-stories__heading">
      Icon
    </div>
    <div className="button-stories__section">
      <div style={{ width: '24px', height: '24px' }}>
        <Button
          disabled={boolean('Disabled', false)}
          isLoading={boolean('Loading', false)}
          onClick={action('click')}
        >
          <div className="button-stories__icon-button">
            <GetApp fontSize="inherit" />
          </div>
        </Button>
      </div>
    </div>
  </div>
);

const AllOptionsStory = () => {
  const BtnCol = ({ disabled, isLoading, color }) => (
    <div className="button-stories__col">
      <div>{`disabled = ${disabled}`}</div>
      <div>{`isLoading = ${isLoading}`}</div>
      <div>
        <Button
          fullWidth
          onClick={action('click')}
          disabled={disabled}
          isLoading={isLoading}
          color={color}
        >
          {text('Label', 'Button')}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <div className="button-stories__heading">color vazio</div>
      <div className="button-stories__row">
        <BtnCol />
        <BtnCol disabled />
        <BtnCol isLoading />
        <BtnCol disabled isLoading />
      </div>
      <div className="button-stories__heading">color = white</div>
      <div className="button-stories__row">
        <BtnCol color="white" />
        <BtnCol color="white" disabled />
        <BtnCol color="white" isLoading />
        <BtnCol color="white" disabled isLoading />
      </div>
      <div className="button-stories__heading">color = light</div>
      <div className="button-stories__row">
        <BtnCol color="light" />
        <BtnCol color="light" disabled />
        <BtnCol color="light" isLoading />
        <BtnCol color="light" disabled isLoading />
      </div>
    </>
  );
};
