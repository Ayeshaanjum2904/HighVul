import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FlexRow from 'common/layout/flexRow';
import PaginationControl from './paginationControl';
import ItemsPerPageControl from './itemsPerPageControl';
import { Container } from './styled';

const maxIpp = (ipp, total) => {
  if (ipp > total) {
    if (total > 50) return 75;
    if (total > 25) return 50;
    return 25;
  }
  return ipp;
};

const NewPaginationFooter = ({
  ipp, page, totalItems, loading, setIpp, setPageFetch, isDrawerOpen, isDataGrid,
}) => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!loading && (isDataGrid || !firstRender)) {
      const newIpp = maxIpp(ipp, totalItems);
      if (ipp !== newIpp) {
        setIpp(newIpp);
      }
    }
    if (firstRender) setFirstRender(false);
  }, [loading]);

  return (
    <Container isDrawerOpen={isDrawerOpen}>
      <FlexRow justifyContent="flex-start">
        <ItemsPerPageControl
          ipp={ipp}
          setIpp={setIpp}
          setPage={setPageFetch}
          totalItems={totalItems}
          disabled={loading}
        />
      </FlexRow>
      <FlexRow justifyContent="flex-end">
        <PaginationControl
          ipp={ipp}
          page={page}
          setPage={setPageFetch}
          totalItems={totalItems}
          disabled={loading}
        />
      </FlexRow>
    </Container>
  );
};

NewPaginationFooter.propTypes = {
  ipp: PropTypes.number,
  page: PropTypes.number,
  totalItems: PropTypes.number,
  loading: PropTypes.bool,
  setIpp: PropTypes.func,
  setPageFetch: PropTypes.func,
  isDrawerOpen: PropTypes.bool,
  isDataGrid: PropTypes.bool,
};

NewPaginationFooter.defaultProps = {
  ipp: 0,
  page: 0,
  totalItems: 0,
  loading: false,
  setIpp: () => {},
  setPageFetch: () => {},
  isDrawerOpen: false,
  isDataGrid: false,
};

export default NewPaginationFooter;
