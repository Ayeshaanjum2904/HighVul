import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { formatValue } from 'utils/format';

const renderLegendItem = ({
  item,
  index,
  colors,
  hover,
  setHoverLegend,
  setHoverSlot,
  hasPercent,
  percent,
}) => {
  const percentItem = percent();
  return (
    <Box
      key={`${item.label}-${item.value}`}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '0.8px solid #E5E6EB',
        padding: '6px',
        color: '#3C414E',
        boxShadow: hover === index ? '0px 4px 4px 0px rgba(0, 0, 0, 0.15)' : 'none',
        userSelect: 'none',
        zIndex: 10,
      }}
      onMouseEnter={() => {
        if (hover !== index || hover === null) {
          setHoverSlot(null);
          setHoverLegend(index);
        }
      }}
      onMouseLeave={() => {
        setHoverLegend(null);
        setHoverSlot(null);
      }}
    >
      {hasPercent ? (
        <Box
          width="100%"
          display="grid"
          gridTemplateColumns="1fr 40px minmax(80px, 88px)"
          justifyContent="flex-end"
        >
          <Box
            width="auto"
            paddingRight="16px"
            display="flex"
            alignItems="center"
          >
            <Typography fontSize="12px" paddingRight="5px" sx={{ color: colors[index] }}>
              •
            </Typography>
            <Typography fontSize="12px">
              {item.label}
            </Typography>
          </Box>
          <Typography display="flex" justifyContent="flex-end" marginRight="12px" fontSize="12px">
            {percentItem[index]}
          </Typography>
          <Typography display="flex" justifyContent="flex-end" fontSize="12px">
            {formatValue(item.value)}
          </Typography>
        </Box>
      ) : (
        <>
          <Box
            paddingRight="16px"
            display="flex"
          >
            <Typography fontSize="12px" paddingRight="5px" sx={{ color: colors[index] }}>
              •
            </Typography>
            <Typography fontSize="12px">
              {item.label}
            </Typography>
          </Box>
          <Typography fontSize="12px">{formatValue(item.value)}</Typography>
        </>
      )}
    </Box>
  );
};

const PieGraphLegend = ({
  hasHeader,
  headerDescription,
  headerValue,
  colors,
  data,
  total,
  hoverSlot,
  hoverLegend,
  setHoverLegend,
  setHoverSlot,
  hasPercent,
  percent,
}) => (
  <>
    {hasHeader && (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '6px',
        borderBottom: '0.8px solid #E5E6EB',
        color: '#3C414E',
      }}
    >
      <Typography fontWeight="500" fontSize="12px">{headerDescription}</Typography>
      <Typography fontWeight="500" fontSize="12px">{headerValue}</Typography>
    </Box>
    )}
    {data.map((item, index) => renderLegendItem({
      item,
      index,
      colors,
      hover: hoverSlot ?? hoverLegend,
      setHoverLegend,
      setHoverSlot,
      hasPercent,
      percent,
    }))}
    {hasPercent ? (
      <Box
        width="100%"
        display="grid"
        gridTemplateColumns="1fr 40px minmax(80px, 88px)"
        justifyContent="flex-end"
        marginTop="4px"
      >
        <Typography
          width="auto"
          paddingRight="16px"
          display="flex"
          fontWeight="700"
          fontSize="12px"
        >
          Total
        </Typography>
        <Typography display="flex" fontWeight="700" justifyContent="flex-end" marginRight="12px" fontSize="12px">
          100%
        </Typography>
        <Typography display="flex" justifyContent="flex-end" fontWeight="700" fontSize="12px">
          {formatValue(total)}
        </Typography>
      </Box>
    ) : (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '6px',
        }}
      >
        <Typography fontWeight="500" fontSize="12px">
          Total
        </Typography>
        <Typography fontWeight="500" fontSize="12px">{formatValue(total)}</Typography>
      </Box>
    )}
  </>
);

PieGraphLegend.propTypes = {
  hasHeader: PropTypes.bool,
  hasPercent: PropTypes.bool,
  headerDescription: PropTypes.string,
  headerValue: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    }),
  ),
  total: PropTypes.number,
  hoverSlot: PropTypes.number,
  hoverLegend: PropTypes.number,
  setHoverLegend: PropTypes.func,
  setHoverSlot: PropTypes.func,
  percent: PropTypes.func,
};

PieGraphLegend.defaultProps = {
  hasHeader: true,
  hasPercent: false,
  headerDescription: null,
  headerValue: null,
  colors: [],
  data: [],
  total: null,
  hoverSlot: null,
  hoverLegend: null,
  setHoverLegend: () => {},
  setHoverSlot: () => {},
  percent: () => {},
};

export default PieGraphLegend;
