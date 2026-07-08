import React from 'react';
import ButtonIcon from 'common/controls/buttonIcon';
import { Bold, Underline, Italic } from 'react-feather';

const TypographyButton = () => (
  <>
    <ButtonIcon
      className="ql-bold"
    >
      <Bold />
    </ButtonIcon>
    <ButtonIcon
      className="ql-underline"
    >
      <Underline />
    </ButtonIcon>
    <ButtonIcon
      className="ql-italic"
    >
      <Italic />
    </ButtonIcon>
  </>
);

export default TypographyButton;
