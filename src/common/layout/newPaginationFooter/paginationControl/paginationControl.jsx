import React from 'react';
import PropTypes from 'prop-types';

import PageIndicator from './views/pageIndicator';
import PageSelector from './views/pageSelector';

import { Container, Indicator } from './styled';

const PaginationControl = ({
  page, ipp, totalItems, disabled, setPage,
}) => (
  <Container>
    <Indicator data-cy="IndicadorPagina">
      <PageIndicator page={page} ipp={ipp} totalItems={totalItems} />
    </Indicator>
    <PageSelector
      page={page}
      setPage={setPage}
      disabled={disabled}
      lastPage={Math.floor((totalItems - 1) / ipp)}
    />
  </Container>
);

PaginationControl.propTypes = {
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  disabled: PropTypes.bool,
  setPage: PropTypes.func,
};

PaginationControl.defaultProps = {
  page: 0,
  ipp: 0,
  totalItems: 0,
  disabled: false,
  setPage: () => {},
};

export default PaginationControl;
