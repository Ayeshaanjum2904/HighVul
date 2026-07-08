import { React, useMemo } from 'react';
import PropTypes from 'prop-types';
import './historicoLimite.scss';
import TimelineDropdown from 'common/controls/timelineDropdown';
import { deburr } from 'lodash';
import { formatDate, formatHour } from 'utils/format';

const HistoricoLimite = ({ historico }) => {
  const timelineItems = useMemo(() => historico?.slice(0).reverse().map((item) => {
    const date = formatDate(item?.dataHora, 'DD/MM/YYYY');
    const time = formatHour(item?.dataHora, 'HH:mm');
    const search = deburr(item?.descricao?.toLowerCase());

    return {
      date,
      time,
      text: item?.descricao,
      search: [search, date].join(' '),
    };
  }), [historico]);

  return (
    <div className="historico">
      <TimelineDropdown
        label="Histórico da aprovação"
        items={timelineItems}
        defaultItem={{ text: 'Aguardando liberação do financiamento rede' }}
      />
    </div>
  );
};

HistoricoLimite.propTypes = {
  historico: PropTypes.array,
};
HistoricoLimite.defaultProps = {
  historico: [],
};
export default HistoricoLimite;
