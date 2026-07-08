import React from 'react';
import { Tooltip } from '@mui/material';
import styled from 'styled-components';

const TooltipMessage = styled(({
  className, title, children, arrow, placement,
}) => (
  <Tooltip title={title} classes={{ tooltip: className, arrow: 'arrow' }} arrow={arrow} placement={placement}>
    {children}
  </Tooltip>
))`
  background-color: rgba(21, 22, 28, 0.7) !important;
  color: #FFFFFF;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '220px')} !important;
  border-radius: 4px;
  font-family: CircularStd, sans-serif !important;
  font-style: normal;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 20px;
  text-align: left;
  padding: 6px 8px !important;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.32);

    .arrow {
      color: rgba(21, 22, 28, 0.7);
    }
`;

export default TooltipMessage;
