import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  PiePlot, ResponsiveChartContainer, ChartsTooltip, pieArcLabelClasses, PieArc,
} from '@mui/x-charts';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import PieGraphLegend from './pieGraphLegend';

const OUTER_RADIUS = 90;
const INNER_RADIUS = 45;
const FADED_DIFF = 5;
const FADED_OUTER_RADIUS = OUTER_RADIUS - FADED_DIFF;

const useStlyes = makeStyles({
  faded: {
    opacity: '0.3 !important',
  },
});

const PieGraph = ({
  infoGraph,
  hasHeader,
  hasPercent,
  headerDescription,
  headerValue,
  arrayColors,
  renderTooltip,
  percentValue,
}) => {
  const classes = useStlyes();

  const [hoverSlot, setHoverSlot] = useState(null);
  const [hoverLegend, setHoverLegend] = useState(null);

  const data = infoGraph;
  const colors = arrayColors;
  const total = data.reduce((a, item) => a + item.value, 0);
  const getArcLabel = (params) => {
    const percent = params.value / total;
    if (percent * 100 >= 6) return `${(percent * 100).toFixed(0)}%`;
    return null;
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
      <Box sx={{ maxWidth: '250px' }}>
        <ResponsiveChartContainer
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontSize: '10px',
            },
            '& .MuiPieArc-root': {
              stroke: 'none',
            },
          }}
          height={200}
          width={200}
          colors={colors}
          series={[
            {
              type: 'pie',
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              innerRadius: INNER_RADIUS,
              outerRadius: OUTER_RADIUS,
              paddingAngle: 0,
              cornerRadius: 0,
              arcLabel: getArcLabel,
            },
          ]}
        >
          <PiePlot
            slots={{
              pieArc: (args) => {
                const { outerRadius } = args;
                outerRadius.resume();
                if (hoverLegend !== null && args.dataIndex !== hoverLegend) {
                  outerRadius.set(FADED_OUTER_RADIUS);
                  outerRadius.pause();
                }
                return (
                  <PieArc
                    {...args}
                    outerRadius={outerRadius}
                    isFaded={hoverLegend !== null && args.dataIndex !== hoverLegend}
                    classes={classes}
                    onMouseOver={() => {
                      if (args?.dataIndex !== hoverSlot || hoverSlot === null) {
                        setHoverLegend(null);
                        setHoverSlot(args?.dataIndex);
                      }
                    }}
                    onMouseOut={(e) => {
                      if (e.relatedTarget.tagName !== 'path') {
                        setHoverSlot(null);
                        setHoverLegend(null);
                      }
                    }}
                  />
                );
              },
            }}
          />
          <ChartsTooltip
            trigger="item"
            slots={{
              itemContent: renderTooltip,
            }}
          />
        </ResponsiveChartContainer>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: '30px',
        width: '100%',
      }}
      >
        <PieGraphLegend
          colors={colors}
          data={data}
          total={total}
          hasHeader={hasHeader}
          hasPercent={hasPercent}
          headerDescription={headerDescription}
          headerValue={headerValue}
          hoverSlot={hoverSlot}
          setHoverSlot={setHoverSlot}
          hoverLegend={hoverLegend}
          setHoverLegend={setHoverLegend}
          percent={percentValue}
        />
      </Box>
    </Box>
  );
};

PieGraph.propTypes = {
  infoGraph: PropTypes.array,
  hasHeader: PropTypes.bool,
  hasPercent: PropTypes.bool,
  headerDescription: PropTypes.string,
  headerValue: PropTypes.string,
  arrayColors: PropTypes.array,
  renderTooltip: PropTypes.func,
  percentValue: PropTypes.func,
};

PieGraph.defaultProps = {
  infoGraph: null,
  hasHeader: true,
  hasPercent: false,
  headerDescription: null,
  headerValue: null,
  arrayColors: [],
  renderTooltip: () => {},
  percentValue: () => {},
};

export default PieGraph;
