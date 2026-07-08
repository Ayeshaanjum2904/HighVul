import React from 'react';
import PropTypes from 'prop-types';

import {
  PageNumber, LeftContainer, RightContainer, LeftArrow, RightArrow, OuterContainer,
} from './styled';

const PageSelector = ({
  page, setPage, disabled, lastPage,
}) => {
  const arrowLeftDisabled = (page === 0 || disabled);
  const arrowRightDisabled = (lastPage <= page || disabled);

  return (
    <OuterContainer>
      <LeftContainer
        disabled={arrowLeftDisabled}
        onClick={() => setPage(page - 1)}
        data-cy="PageBack"
      >
        <LeftArrow />
      </LeftContainer>
      <PageNumber data-cy="PageNumber">
        {page + 1}
      </PageNumber>
      <RightContainer
        disabled={arrowRightDisabled}
        onClick={() => setPage(page + 1)}
        data-cy="PageFoward"
      >
        <RightArrow />
      </RightContainer>
    </OuterContainer>
  );
};

PageSelector.propTypes = {
  page: PropTypes.number,
  lastPage: PropTypes.number,
  disabled: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
};

PageSelector.defaultProps = {
  page: 0,
  lastPage: 0,
  disabled: false,
};

export default PageSelector;
