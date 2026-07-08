import React from 'react';
import PropTypes from 'prop-types';
import { StyledExpandButton, StyledExpandIcon } from './expandButton.style';

const ExpandButton = ({ expanded, onClick }) => (
  <StyledExpandButton
    expanded={expanded}
    startIcon={<StyledExpandIcon />}
    onClick={onClick}
  >
    {expanded ? 'Ver menos' : 'Ver mais'}
  </StyledExpandButton>
);

ExpandButton.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ExpandButton;
