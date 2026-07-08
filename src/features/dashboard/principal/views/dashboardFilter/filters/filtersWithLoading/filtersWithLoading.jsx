import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import VariableSizeList from 'common/controls/virtualize';

const FiltersWithLoading = ({
  isLoading, ...props
}) => (
  !isLoading
    ? (
      <VariableSizeList
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        showAllItems
      />
    )
    : (
      <div className="dashboard__page__filter__content_loading-container">
        <CircularProgress className="dashboard__page__filter__content_loading" color="inherit" size="18px" />
      </div>
    )
);

FiltersWithLoading.propTypes = {
  isLoading: PropTypes.bool,
};

FiltersWithLoading.defaultProps = {
  isLoading: false,
};

export default FiltersWithLoading;
