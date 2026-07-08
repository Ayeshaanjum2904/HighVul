import { connect } from 'react-redux';
import moment from 'moment';
import operations from '../../redux/operations';
import ExportarRelatorio from './exportarRelatorio';

const getMotivoButtonDisabled = ({ dataInicioPedido, dataFimPedido, dataFaturamento }) => {
  if (!dataFaturamento && !dataInicioPedido && !dataFimPedido) return 'Selecione a data do pedido ou a data de faturamento para exportar o relatório.';

  if (!dataInicioPedido && dataFimPedido) return 'Selecione a data de início do pedido para exportar o relatório.';

  if (dataInicioPedido && !dataFimPedido) return 'Selecione a data de fim do pedido para exportar o relatório.';

  if (!dataFaturamento && dataInicioPedido && dataFimPedido) {
    const isRangeExceeded = moment(dataInicioPedido).isBefore(moment(dataFimPedido).subtract(12, 'months'));
    if (isRangeExceeded) return 'O período para geração do relatório (Campo "Data do pedido") não pode exceder um ano (365 dias). Por favor, ajuste os filtros.';
  }

  return '';
};

const mapStateToProps = (state) => {
  const { filters } = state.pedidos.page;
  const { isExporting } = state.pedidos.page.exportRelatorio;
  const { dataInicioPedido, dataFimPedido, dataFaturamento } = filters;

  const motivoButtonDisabled = getMotivoButtonDisabled({
    dataInicioPedido,
    dataFimPedido,
    dataFaturamento,
  });

  return {
    isExporting,
    isDateRangeInvalid: !!motivoButtonDisabled,
    motivoButtonDisabled,
  };
};

const mapDispatchToProps = (dispatch) => ({
  exportarRelatorio: () => dispatch(operations.exportarRelatorio()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExportarRelatorio);
