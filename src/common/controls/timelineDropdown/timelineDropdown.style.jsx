import { styled, TextField } from '@mui/material';
import { KeyboardArrowDownRounded, SearchRounded } from '@material-ui/icons';
import colors from 'assets/styles/colors';
import {
  TimelineConnector, TimelineContent, TimelineDot, timelineItemClasses,
} from '@mui/lab';
import { withTransientProps } from 'utils/styled';

export const TimelineDropdownProps = (open, allowOpen, summaryHeight, detailsHeight) => ({
  label: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    textAlign: 'left',
    color: colors.secundary_color_800,
    paddingLeft: '8px',
    paddingBottom: '4px',
  },
  accordion: {
    border: `1px solid ${colors.primary_color_100_48}`,
    position: 'relative',
    zIndex: 500,
    boxShadow: open ? '0px 4px 4px 0px rgba(0, 0, 0, 0.16)' : 'none',
  },
  summary: {
    height: summaryHeight,
    boxSizing: 'content-box',
    minHeight: 'unset',
    padding: '8px 8px 14px 8px',
    backgroundColor: `${colors.primary_color_100_16} !important`,
    cursor: allowOpen ? 'pointer' : 'default !important',
    '& .MuiAccordionSummary-content': {
      margin: '0',
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
      transition: 'none',
      alignSelf: 'flex-start',
    },
  },
  details: {
    padding: 0,
    boxSizing: 'content-box',
    paddingRight: '4px',
    backgroundColor: colors.primary_color_100_16,
  },
  timeline: {
    root: {
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
      margin: 0,
      padding: '0px 26px 0px 8px',
    },
    container: {
      overflowY: 'scroll',
      maxHeight: detailsHeight,
      '&::-webkit-scrollbar': {
        background: 'transparent',
        width: '4px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: colors.secundary_color_500,
      },
    },
    item: {
      display: 'grid',
      gridTemplateRows: '16px 40px',
    },
  },
  empty: {
    grid: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gridGap: '12px',
      marginBottom: '6px',
      color: colors.primary_color_700,
      textAlign: 'center',
    },
    header: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      color: 'inherit',
    },
    description: {
      fontSize: '14px',
      fontWeight: 450,
      lineHeight: '16px',
      color: 'inherit',
    },
  },
});

export const TextFieldComponent = styled(TextField)({
  height: '36px',
  backgroundColor: 'white !important',
  marginRight: '4px',
  borderRadius: '4px',
  borderBottom: '1px solid rgba(229, 230, 235, 0.24)',
  '& .MuiOutlinedInput-root': {
    padding: 0,
    backgroundColor: 'white !important',
    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-input': {
    height: '35px',
    padding: '0px',
    fontFamily: 'CircularStd, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    color: colors.secundary_color_700,
  },
});

export const DateTimeSpan = styled('span', withTransientProps)(
  ({ ...props }) => ({
    lineHeight: '16px',
    fontSize: 12,
    fontWeight: 450,
    color: props?.$index === 0 ? colors.primary_color_700 : colors.secundary_color_700,
  }),
);

export const TextSpan = styled('span', withTransientProps)(
  ({ ...props }) => ({
    marginTop: '8px',
    lineHeight: '16px',
    height: '32px',
    fontSize: 14,
    fontWeight: 450,
    color: props?.$index === 0 ? colors.primary_color_700 : colors.secundary_color_700,
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }),
);

export const CustomSearchRoundedIcon = styled(SearchRounded)`
  font-size: 16px !important;
  color: ${colors.secundary_color_600} !important;
  margin: 0px 8px;
`;

export const CustomArrowDownIcon = styled(KeyboardArrowDownRounded)`
  font-size: 30px !important;
  color: ${colors.icon_color} !important;
`;

export const CustomTimelineDot = styled(TimelineDot, withTransientProps)(
  ({ ...props }) => ({
    width: 8,
    height: 8,
    padding: 0,
    margin: 0,
    border: 0,
    backgroundColor: `${props?.$index === 0 ? colors.primary_color_700 : colors.secundary_color_600} !important`,
  }),
);

export const CustomTimelineConnector = styled(TimelineConnector, withTransientProps)(
  ({ ...props }) => ({
    backgroundColor: `${(props?.$index === 0 || (props?.$hideFirst && props?.$index === 1)) ? colors.primary_color_700 : colors.secundary_color_600} !important`,
    height: props?.$height ?? 'unset',
    flexGrow: props?.$flexGrow ?? 1,
    visibility: (props?.$hideFirst && props?.$index === 0)
          || (props?.$hideLast && props?.$index === props.$length - 1) ? 'hidden' : 'unset',
  }),
);

export const CustomTimelineContent = styled(TimelineContent, withTransientProps)(
  ({ ...props }) => ({
    borderBottom: props?.$index === props.$length - 1 ? 'none' : `1px solid ${colors.primary_color_100_48}`,
    padding: '0px 0px 4px 22px',
  }),
);
