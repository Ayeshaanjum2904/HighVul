import React from 'react';
import PropTypes from 'prop-types';
import PaginationFooter from 'common/controls/paginationFooter/paginationFooter';

const ResgateFooter = ({
  loading, pageParams, setPageParams, total,
}) => {
  const { ipp, page } = pageParams;

  const handleIppChange = (newIppValue) => {
    setPageParams((prevState) => ({
      ...prevState,
      ipp: newIppValue,
    }));
  };

  const handlePageChange = (newPageValue) => {
    setPageParams((prevState) => ({
      ...prevState,
      page: newPageValue,
    }));
  };

  return (
    <PaginationFooter
      ipp={ipp}
      page={page}
      totalItems={total}
      loading={loading}
      setIpp={handleIppChange}
      setPageFetch={handlePageChange}
    />
  );
};

ResgateFooter.propTypes = {
  pageParams: PropTypes.object,
  setPageParams: PropTypes.func,
  total: PropTypes.number,
  loading: PropTypes.bool,
};

ResgateFooter.defaultProps = {
  setPageParams: () => {},
  pageParams: null,
  total: 0,
  loading: false,
};

export default ResgateFooter;
