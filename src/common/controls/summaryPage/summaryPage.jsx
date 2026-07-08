import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { KeyboardArrowDownRounded } from '@material-ui/icons';
import { Box, Typography } from '@mui/material';
import { useStyles } from './summaryPage.style';

const SummaryPage = ({
  title, children, IconTitle, level, open, handleOpenChange, actions,
  preventClose, preventCloseCallback, info, hideAccordion, controlled,
}) => {
  const [openState, setOpenState] = useState(open);
  useEffect(() => {
    setOpenState(open);
  }, [open]);

  const classes = useStyles({ level });
  const handleChange = () => {
    if (controlled) {
      return;
    }
    if (preventClose && openState) {
      preventCloseCallback();
      return;
    }
    setOpenState(!openState);
    handleOpenChange(!openState);
  };

  return (
    <Accordion
      expanded={openState}
      onChange={handleChange}
      classes={{
        root: classes.accordion,
        rounded: classes.rounded,
        expanded: classes.expandedAccordion,
      }}
    >
      <AccordionSummary
        expandIcon={hideAccordion ? (
          null
        ) : (
          <KeyboardArrowDownRounded className={classes.icon} />
        )}
        classes={{
          root: classes.summary,
          expanded: classes.expanded,
          expandIcon: classes.expandIcon,
          content: classes.content,
        }}
      >
        {title}
        {IconTitle}
        <Box flexGrow={1} />
        {actions}
        {info && (
          <Typography variant="14_regular">
            {info}
          </Typography>
        )}
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

SummaryPage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  IconTitle: PropTypes.node,
  level: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7]),
  open: PropTypes.bool,
  handleOpenChange: PropTypes.func,
  actions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  preventClose: PropTypes.bool,
  preventCloseCallback: PropTypes.func,
  info: PropTypes.string,
  hideAccordion: PropTypes.bool,
  controlled: PropTypes.bool,
};

SummaryPage.defaultProps = {
  title: '',
  children: null,
  IconTitle: null,
  level: 0,
  open: false,
  handleOpenChange: () => { },
  actions: null,
  preventClose: false,
  preventCloseCallback: () => { },
  info: '',
  hideAccordion: false,
  controlled: false,
};

export default SummaryPage;
