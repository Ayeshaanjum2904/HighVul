import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FlexRow from 'common/layout/flexRow';
import PaginationControl from '../paginationControl';
import ItemsPerPageControl from '../itemsPerPageControl';
import { Container } from './paginationFooter.style';

const maxIpp = (ipp, total) => {
  if (ipp > total) {
    if (total > 50) return 75;
    if (total > 25) return 50;
    return 25;
  }
  return ipp;
};

const PaginationFooter = ({
  ipp, page, totalItems, loading, setIpp, setPageFetch,
}) => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!loading && !firstRender) {
      const newIpp = maxIpp(ipp, totalItems);
      if (ipp !== newIpp) {
        setIpp(newIpp);
      }
    }
    if (firstRender) setFirstRender(false);
    // eslint-disable-next-line
  }, [loading]);

  return (
    <Container>
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

PaginationFooter.propTypes = {
  ipp: PropTypes.number,
  page: PropTypes.number,
  totalItems: PropTypes.number,
  loading: PropTypes.bool,
  setIpp: PropTypes.func,
  setPageFetch: PropTypes.func,
};

PaginationFooter.defaultProps = {
  ipp: 0,
  page: 0,
  totalItems: 0,
  loading: false,
  setIpp: () => {},
  setPageFetch: () => {},
};

export default PaginationFooter;
