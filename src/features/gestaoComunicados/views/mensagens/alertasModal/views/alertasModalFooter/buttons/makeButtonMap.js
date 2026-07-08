import React from 'react';

import modalStatus from '../../../status';

import ProximoButton from './proximoButton';
import VoltarButton from './voltarButton';
import Finalizarbutton from './finalizarbutton';

export const makeButtonMap = () => [
  {
    status: modalStatus.conteudo,
    button1: null,
    button2: <ProximoButton />,
  },
  {
    status: modalStatus.concluido,
    button1: <VoltarButton />,
    button2: <Finalizarbutton />,
  },
];
