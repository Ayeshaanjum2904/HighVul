import React from 'react';
import PropTypes from 'prop-types';

import ItemsPerPageSelector from './views/itemsPerPageSelector';
import { Container, Text } from './styled';

const ItemsPerPageControl = ({
  ipp, setIpp, setPage, totalItems, disabled,
}) => (
  <Container>
    <ItemsPerPageSelector
      ipp={ipp}
      setIpp={setIpp}
      setPage={setPage}
      totalItems={totalItems}
      disabled={disabled}
    />
    <Text data-cy="IppText">
      Itens por página
    </Text>
  </Container>
);

ItemsPerPageControl.propTypes = {
  ipp: PropTypes.number,
  setIpp: PropTypes.func,
  setPage: PropTypes.func,
  totalItems: PropTypes.number,
  disabled: PropTypes.bool,
};

ItemsPerPageControl.defaultProps = {
  ipp: 0,
  setIpp: () => {},
  setPage: () => {},
  totalItems: 75,
  disabled: false,
};

export default ItemsPerPageControl;
