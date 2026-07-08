import React from 'react';
import PropTypes from 'prop-types';
import {
  LeftContainer, MiddleContainer, OuterContainer, RightContainer,
} from './itemsPerPageSelector.style';

const FIRST = 25;
const SECOND = 50;
const THIRD = 75;

const ItemsPerPageSelector = ({
  ipp,
  setIpp,
  setPage,
  totalItems,
  disabled,
}) => {
  const activeFirst = ipp === FIRST;
  const activeSecond = ipp === SECOND;
  const activeThird = ipp === THIRD;

  const disableFirst = activeFirst || disabled;
  const disableSecond = totalItems <= FIRST || activeSecond || disabled;
  const disableThird = totalItems <= SECOND || activeThird || disabled;

  const onClickAction = (disable, newIpp) => {
    if (disable) return;
    setIpp(newIpp);
    setPage(0);
  };

  return (
    <OuterContainer>
      <LeftContainer
        isActive={activeFirst}
        disabled={disableFirst}
        onClick={() => onClickAction(disableFirst, FIRST)}
        data-cy="ItensPerPage_25"
        role="row"
        tabIndex={0}
      >
        {FIRST}
      </LeftContainer>
      <MiddleContainer
        isActive={activeSecond}
        disabled={disableSecond}
        onClick={() => onClickAction(disableSecond, SECOND)}
        data-cy="ItensPerPage_50"
        role="row"
        tabIndex={0}
      >
        {SECOND}
      </MiddleContainer>
      <RightContainer
        isActive={activeThird}
        disabled={disableThird}
        onClick={() => onClickAction(disableThird, THIRD)}
        data-cy="ItensPerPage_75"
        role="row"
        tabIndex={0}
      >
        {THIRD}
      </RightContainer>
    </OuterContainer>
  );
};

ItemsPerPageSelector.propTypes = {
  ipp: PropTypes.number,
  setIpp: PropTypes.func,
  setPage: PropTypes.func,
  totalItems: PropTypes.number,
  disabled: PropTypes.bool,
};

ItemsPerPageSelector.defaultProps = {
  ipp: 0,
  setIpp: () => {},
  setPage: () => {},
  totalItems: 0,
  disabled: false,
};

export default ItemsPerPageSelector;
