import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const BaseTooltipItemContent = ({
  width,
  height,
  chartProps,
  chartColors,
  arrayTooltipTitles,
  renderChartTooltipContent,
}) => {
  const { itemData } = chartProps;
  const color = chartColors?.[itemData?.dataIndex];
  const title = arrayTooltipTitles?.[itemData?.dataIndex];
  return (
    <Box sx={{
      width,
      height,
      borderRadius: '4px',
      border: '0.5px',
      opacity: '0px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    }}
    >
      <Box sx={{
        width: '2px',
        height: '42px',
        borderRadius: '4px 0px 4px 0px',
        border: '0.5px 0px 0.5px 0px',
        borderColor: color,
        backgroundColor: color,
      }}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '4px',
      }}
      >
        <Typography sx={{
          fontSize: '10px',
          fontWeight: 500,
          lineHeight: '12px',
          textAlign: 'left',
          color,
        }}
        >
          {title}
        </Typography>
        {renderChartTooltipContent?.(chartProps)}
      </Box>
    </Box>
  );
};

BaseTooltipItemContent.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  chartProps: PropTypes.object,
  chartColors: PropTypes.array,
  arrayTooltipTitles: PropTypes.array,
  renderChartTooltipContent: PropTypes.func,
};

BaseTooltipItemContent.defaultProps = {
  height: '50px',
  width: '80px',
  chartProps: null,
  chartColors: [],
  arrayTooltipTitles: [],
  renderChartTooltipContent: () => {},
};

export default BaseTooltipItemContent;
