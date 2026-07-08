import React from 'react';

import { status } from '../../../status';

import AprovarCreditoButton from './buttons/aprovarCreditoButton';
import ReprovarCreditoButton from './buttons/reprovarCreditoButton';
import AprovarComercialButton from './buttons/aprovarComercialButton';
import ReprovarComercialButton from './buttons/reprovarComercialButton';
import EnviarFaturamentoButton from './buttons/enviarFaturamentoButton';
import EnviarSeparacaoButton from './buttons/enviarSeparacaoButton';
import EncerrarPedidoButton from './buttons/encerrarPedidoButton';
import CancelarPedidoButton from './buttons/cancelarPedidoButton';
import CancelarContratoButton from './buttons/cancelarContratoButton';
import SalvarAlteracoesVeiculoButton from './buttons/salvarAlteracoesVeiculoButton';

export const makeButtonMap = (isAVista, fluxoAntigo) => [
  {
    status: status.analiseComercial,
    button1: <ReprovarComercialButton />,
    button2: <AprovarComercialButton />,

  },
  {
    status: status.analiseCredito,
    button1: <CancelarPedidoButton />,
    button2: <ReprovarCreditoButton />,
    button3: <AprovarCreditoButton />,
  },
  {
    status: status.financiamentoReversao,
    button1: <CancelarPedidoButton />,
    button2: <EnviarSeparacaoButton />,
  },
  {
    status: status.financiamentoAnalise,
    button1: <CancelarPedidoButton />,
    button2: <EnviarSeparacaoButton />,
  },
  {
    status: status.financiamentoFinalizacao,
    button1: null,
    button2: <EncerrarPedidoButton />,
  },
  {
    status: status.pendenteMontadora,
    button1: <CancelarPedidoButton />,
    button2: <EnviarSeparacaoButton />,
  },
  {
    status: status.separacao,
    button1: <CancelarPedidoButton />,
    button2: fluxoAntigo ? <EnviarFaturamentoButton /> : null,
  },
  {
    status: status.prontoParaFaturamento,
    button1: <CancelarPedidoButton />,
    button2: <EncerrarPedidoButton />,
  },
  {
    status: status.faturado,
    button1: <CancelarContratoButton />,
    button2: isAVista === false ? <EncerrarPedidoButton title="Inserir Contrato" /> : null,
  },
  {
    status: status.contratoAnexado,
    button1: <CancelarContratoButton />,
    button2: <EncerrarPedidoButton title="Inserir data do Pagamento" />,
  },
  {
    status: status.contratoPago,
    button1: null,
    button2: <CancelarContratoButton />,
  },
  {
    status: status.aguardandoModalidadeDealer,
    button1: <CancelarPedidoButton />,
    button2: <EnviarSeparacaoButton />,
  },
  {
    status: status.aguardandoCartaMes,
    button1: <CancelarPedidoButton />,
  },
  {
    status: status.analiseCreditoReprovada,
    button1: <CancelarPedidoButton />,
    button2: <EnviarSeparacaoButton />,
    button3: <AprovarCreditoButton />,
  },
  {
    status: status.aguardandoCondicoesAnaliseCredito,
    button1: <CancelarPedidoButton />,

  },
  {
    status: status.aguardandoCartaMesAnaliseCredito,
    button1: <CancelarPedidoButton />,
    button2: <ReprovarCreditoButton />,
    button3: <AprovarCreditoButton />,
  },
  {
    status: status.aguardandoCartaMesCondicoesAnaliseCredito,
    button1: <CancelarPedidoButton />,
  },
  {
    status: status.cancelado,
    button3: true,
  },
  {
    status: status.canceladoPeloCliente,
    button3: true,
  },
  {
    status: status.contratoCancelado,
    button3: true,
  },
  {
    status: status.finalizado,
    button3: true,
  },
  {
    status: status.separacaoErroIntegracao,
    button1: <CancelarPedidoButton />,
    buttonSalvar: <SalvarAlteracoesVeiculoButton />,
  },
  {
    status: status.faturadoMontadora,
    button1: <CancelarContratoButton />,
    button2: isAVista === false ? <EncerrarPedidoButton title="Inserir Contrato" /> : null,
    button4: <SalvarAlteracoesVeiculoButton />,
  },
];

export const makeButtonMapOrdem = (isAVista) => [
  {
    status: status.analiseCredito,
    button1: <CancelarPedidoButton />,
    button2: <ReprovarCreditoButton />,
    button3: <AprovarCreditoButton />,
  },
  {
    status: status.financiamentoReversao,
    button1: <CancelarPedidoButton />,
    button2: <EnviarSeparacaoButton />,
  },
  {
    status: status.separacao,
    button1: <CancelarPedidoButton />,
  },
  {
    status: status.faturadoMontadora,
    button1: <CancelarContratoButton />,
    button2: isAVista === false ? <EncerrarPedidoButton title="Inserir Contrato" /> : null,
    button4: <SalvarAlteracoesVeiculoButton />,
  },
  {
    status: status.contratoPago,
    button1: null,
    button2: <CancelarContratoButton />,
  },
  {
    status: status.separacaoErroIntegracao,
    button1: <CancelarPedidoButton />,
    buttonSalvar: <SalvarAlteracoesVeiculoButton />,
  },
];

export const getButtonMap = (isOrdem, isAVista, fluxoAntigo) => (
  isOrdem ? makeButtonMapOrdem(isAVista) : makeButtonMap(isAVista, fluxoAntigo)
);
