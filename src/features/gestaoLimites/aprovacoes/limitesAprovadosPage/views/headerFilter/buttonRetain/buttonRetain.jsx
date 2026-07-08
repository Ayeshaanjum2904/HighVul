import React from 'react';
import PropTypes from 'prop-types';

import './buttonRetain.scss';
import Button from 'common/controls/button';
import _ from 'lodash';

const ButtonRetain = ({
  reterProposta,
  textApply,
  fullWidth,
  dataCy,
  selectedIds,
}) => (
  <Button
    className="common__filters__botao-recusar"
    onClick={() => reterProposta('aprovacao_retida')}
    fullWidth={fullWidth}
    dataCy={dataCy}
    color="dark_gray_border"
    disabled={_.isEmpty(selectedIds)}
  >
    {textApply}
  </Button>
);

ButtonRetain.propTypes = {
  reterProposta: PropTypes.func,
  textApply: PropTypes.string,
  fullWidth: PropTypes.bool,
  dataCy: PropTypes.string,
  selectedIds: PropTypes.array,
};

ButtonRetain.defaultProps = {
  reterProposta: () => {},
  textApply: 'Reter aprovação',
  fullWidth: false,
  selectedIds: [],
  dataCy: null,
};

export default ButtonRetain;
