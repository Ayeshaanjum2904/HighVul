import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ButtonIcon from 'common/controls/buttonIcon';
import CloseIcon from '@material-ui/icons/Close';

import './brandChips.scss';

const FilterChips = ({
  // eslint-disable-next-line react/prop-types
  name, value, clear, isActive,
}) => (
  isActive ? (
    <div className="comunicados-modal__list-filter">
      <div className="comunicados-modal__list-filter_name">
        {`${name}:`}
      </div>
      <div className="comunicados-modal__list-filter_value">
        {value}
      </div>
      <div className="comunicados-modal__list-filter_clear">
        <ButtonIcon onClick={clear}>
          <CloseIcon fontSize="inherit" />
        </ButtonIcon>
      </div>
    </div>
  ) : null
);

const BrandChips = ({
  setBrands, selectedBrands,
}) => (
  <div className="comunicados-modal__filter__display_container">
    <div className="comunicados-modal__filter__display">
      <FilterChips
        name="Brand selecionada"
        value={selectedBrands?.map((b) => b.text.concat(', ')).join('').slice(0, -2)}
        clear={() => { setBrands([]); }}
        isActive={!_.isEmpty(selectedBrands) && selectedBrands !== null}
      />
    </div>
  </div>
);

BrandChips.propTypes = {
  setBrands: PropTypes.func,
  selectedBrands: PropTypes.array,
};
BrandChips.defaultProps = {
  setBrands: () => {},
  selectedBrands: [],
};

export default BrandChips;
