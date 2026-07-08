import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { camelFormat, formatCodigoConcessionaria } from 'utils/format';
import { DealerCodigo, DealerItem, DealerNome } from './dealerInfo.style';

const DealerInfo = memo(({ row }) => {
  const dealerTitle = camelFormat(row.nomeDealer);
  return (
    <DealerItem>
      <DealerCodigo>{formatCodigoConcessionaria(row.codDealer)}</DealerCodigo>
      <DealerNome title={dealerTitle}>{dealerTitle}</DealerNome>
    </DealerItem>
  );
});

DealerInfo.propTypes = {
  row: PropTypes.object.isRequired,
};

export default DealerInfo;
