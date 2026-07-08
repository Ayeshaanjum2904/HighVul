import React from 'react';
import PropTypes from 'prop-types';
import { Mixpanel, trackedProperties } from 'modules';
import NewDatepickerStyles from 'common/controls/newDatePicker/newDatePicker';
import { Box } from '@mui/material';

const SelectData = ({
  dataInicial, dataFinal, setDataInicial, setDataFinal, isLoading,
}) => (
  <Box
    sx={{
      marginTop: '2px',
      width: '260px',
      position: 'relative',
      display: 'flex',
    }}
  >
    <NewDatepickerStyles
      title="Período"
      initialStartDate={dataInicial}
      initialEndDate={dataFinal}
      setStartDate={(date) => {
        setDataInicial(date);
        Mixpanel.trackPageFilter(trackedProperties.historicoTaxas, 'date begin');
      }}
      setEndDate={(date) => {
        setDataFinal(date);
        Mixpanel.trackPageFilter(trackedProperties.historicoTaxas, 'date end');
      }}
      isOutsideRange={() => false}
      resetState={false}
      setResetState={() => []}
      showErrorMessage={false}
      disabled={isLoading}
    />
  </Box>
);

SelectData.propTypes = {
  dataInicial: PropTypes.object,
  setDataInicial: PropTypes.func,
  dataFinal: PropTypes.object,
  setDataFinal: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectData.defaultProps = {
  dataInicial: null,
  setDataInicial: () => {},
  dataFinal: null,
  setDataFinal: () => {},
  isLoading: false,
};

export default SelectData;
