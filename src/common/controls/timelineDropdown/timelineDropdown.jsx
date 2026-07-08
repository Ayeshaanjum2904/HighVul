import {
  React, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, AccordionDetails, AccordionSummary, Box,
  ClickAwayListener,
} from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator,
} from '@mui/lab';
import { deburr } from 'lodash';
import {
  CustomArrowDownIcon,
  CustomSearchRoundedIcon,
  CustomTimelineConnector,
  CustomTimelineContent,
  CustomTimelineDot,
  TimelineDropdownProps,
  TextFieldComponent,
  DateTimeSpan,
  TextSpan,
} from './timelineDropdown.style';

const TimelineDropdown = ({
  items, defaultItem, label, width, height, openHeight, detailsHeight, isOpen, disableFocusInput,
}) => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => () => setSearch(''), []);

  useEffect(() => {
    if (isOpen !== open) setOpen(isOpen);
  }, [isOpen]);

  const filteredItems = useMemo(() => {
    const normalizeSearch = deburr(search?.toLowerCase().normalize('NFD'));
    return items.filter((item) => {
      const itemSearch = item?.search ? item?.search : item?.text?.toLowerCase();
      return itemSearch?.includes(normalizeSearch);
    });
  }, [search, items]);

  const isEmpty = items?.length === 0;
  const allowOpen = items?.length > 1;
  const summaryHeight = open ? openHeight : height;
  const styles = TimelineDropdownProps(open, allowOpen, summaryHeight, detailsHeight);

  const handleClickAway = () => {
    if (open) {
      setOpen(false);
      setSearch('');
    }
  };

  const handleAccordionClick = () => {
    if (allowOpen) {
      setOpen(!open);
      if (open) setSearch('');
    }
  };

  const renderTimestamp = (date, time, index = 0) => {
    const renderDate = Boolean(date);
    const renderTime = Boolean(time);

    let renderText = '';
    if (renderDate || renderTime) {
      if (renderDate) {
        renderText += date;
        renderText += renderTime ? '  |  ' : '';
      }
      if (renderTime) renderText += time;
    }

    return (
      <DateTimeSpan $index={index}>
        <Box component="pre" sx={{ margin: 0 }}>{renderText}</Box>
      </DateTimeSpan>
    );
  };

  const renderSummaryContent = () => {
    const renderItem = isEmpty ? defaultItem : items[0];
    return (
      <Box width={width - 48} gridTemplateColumns="20px 1fr" sx={styles.timeline.item}>
        <Box sx={{ alignSelf: 'center' }}>
          {!isEmpty && <CustomTimelineDot $index={0} />}
        </Box>
        {renderTimestamp(renderItem?.date, renderItem?.time)}
        <Box />
        <TextSpan title={renderItem?.text} $index={0}>
          {renderItem?.text}
        </TextSpan>
      </Box>
    );
  };

  const renderSummary = () => (open
    ? (
      <TextFieldComponent
        autoFocus={!disableFocusInput}
        fullWidth
        placeholder="Pesquisar no histórico"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        InputProps={{ startAdornment: <CustomSearchRoundedIcon /> }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') e.stopPropagation();
        }}
      />
    )
    : renderSummaryContent()
  );

  const renderDetails = () => (
    <Box sx={styles.timeline.container}>
      <Timeline sx={styles.timeline.root}>
        {filteredItems?.length > 0
          ? filteredItems.map((item, index) => (
            <TimelineItem key={index} sx={{ minHeight: '60px' }}>
              <TimelineSeparator>
                <CustomTimelineConnector $index={index} $length={filteredItems.length} $height="8px" $flexGrow={0} $hideFirst />
                <CustomTimelineDot $index={index} />
                <CustomTimelineConnector $index={index} $length={filteredItems.length} $hideLast />
              </TimelineSeparator>
              <CustomTimelineContent $index={index} $length={filteredItems.length}>
                <Box gridTemplateColumns="1fr" marginTop="4px" sx={styles.timeline.item}>
                  {renderTimestamp(item?.date, item?.time, index)}
                  <TextSpan sx={{ marginTop: '4px' }} title={item?.text} $index={index}>
                    {item?.text}
                  </TextSpan>
                </Box>
              </CustomTimelineContent>
            </TimelineItem>
          ))
          : (
            <Box sx={styles.empty.grid}>
              <Box sx={styles.empty.header}>Sem resultados</Box>
              <Box sx={styles.empty.description}>Tente buscar por outra palavra</Box>
            </Box>
          )}
      </Timeline>
    </Box>
  );

  return (
    <Box>
      {Boolean(label) && <Box sx={styles.label}>{label}</Box>}
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ width, height: height + 24 }}>
          <Accordion
            sx={styles.accordion}
            expanded={open}
            onChange={handleAccordionClick}
            disableGutters
            slotProps={{ transition: { timeout: 0 } }}
          >
            <AccordionSummary
              sx={styles.summary}
              expandIcon={allowOpen ? <CustomArrowDownIcon /> : null}
            >
              {renderSummary()}
            </AccordionSummary>
            <AccordionDetails sx={styles.details}>
              {renderDetails()}
            </AccordionDetails>
          </Accordion>
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

TimelineDropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      time: PropTypes.string,
      text: PropTypes.string,
      search: PropTypes.string,
    }),
  ),
  defaultItem: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
    text: PropTypes.string,
  }),
  label: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  openHeight: PropTypes.number,
  detailsHeight: PropTypes.number,
  isOpen: PropTypes.bool,
  disableFocusInput: PropTypes.bool,
};

TimelineDropdown.defaultProps = {
  items: [],
  defaultItem: {
    date: '00/00/0000',
    time: '00:00',
    text: 'Nenhum histórico encontrado',
  },
  label: 'Histórico',
  width: 534,
  height: 56,
  openHeight: 36,
  detailsHeight: 168,
  isOpen: false,
  disableFocusInput: false,
};

export default TimelineDropdown;
