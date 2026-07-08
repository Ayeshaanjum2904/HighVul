import React from 'react';

import { ModalEmail } from '../../../../../../redux/enums';

import ProximoButton from './proximoButton';
import VoltarButton from './voltarButton';
import Finalizarbutton from './finalizarbutton';

export const makeButtonMap = () => [
  {
    status: ModalEmail.edicaoEmail,
    button1: null,
    button2: <ProximoButton />,
  },
  {
    status: ModalEmail.previewEmail,
    button1: <VoltarButton />,
    button2: <Finalizarbutton />,
  },
];
