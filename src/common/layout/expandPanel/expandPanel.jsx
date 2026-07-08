import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from 'assets/icons/expand-more';
import colors from 'assets/styles/colors';

const ExpandPanel = ({
  children, title, dataCy, minWidth, ...rest
}) => (
  <Accordion
    disableGutters
    sx={{
      borderRadius: '4px',
      border: `1px solid ${colors.secundary_color_200}`,
      boxShadow: 'none',
      minWidth,
    }}
    {...rest}
  >
    <AccordionSummary
      sx={{
        backgroundColor: colors.primary_color_100_36,
        '&:hover': {
          backgroundColor: colors.primary_color_100_56,
        },
        '&.Mui-expanded': {
          backgroundColor: colors.primary_color_100_88,
        },
      }}
      data-cy={dataCy}
      expandIcon={<ExpandMoreIcon />}
    >
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '700',
          color: colors.secundary_color_800,
        }}
      >
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails
      sx={{
        padding: '8px 10px 8px;',
      }}
    >
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: '300',
          color: colors.secundary_color_700,
          paddingTop: '10px',
        }}
      >
        {children}
      </Typography>
    </AccordionDetails>
  </Accordion>
);

ExpandPanel.propTypes = {
  title: PropTypes.string,
  dataCy: PropTypes.string,
  children: PropTypes.element,
  minWidth: PropTypes.string,
};

ExpandPanel.defaultProps = {
  title: null,
  dataCy: null,
  children: null,
  minWidth: null,
};

export default ExpandPanel;
