import React from 'react';
import PropTypes from 'prop-types';

import './paginationFooter.scss';
import ItemsPerPageControl from 'common/controls/itemsPerPageControl';
import PaginationControl from 'common/controls/paginationControl';
import FlexRow from '../flexRow';

const PaginationFooter = ({
  page, ipp, totalItems, isLoading, setPage, setIpp,
}) => (
  <div className="pagination-footer">
    <FlexRow justifyContent="flex-start">
      <ItemsPerPageControl
        ipp={ipp}
        setIpp={setIpp}
        setPage={setPage}
      />
    </FlexRow>
    <FlexRow justifyContent="flex-end">
      <PaginationControl
        page={page}
        ipp={ipp}
        totalItems={totalItems}
        disabled={isLoading}
        setPage={setPage}
      />
    </FlexRow>
  </div>
);

PaginationFooter.propTypes = {
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
};

PaginationFooter.defaultProps = {
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
};

export default PaginationFooter;
