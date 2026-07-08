import React from 'react';
import PropTypes from 'prop-types';
import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import colors from 'assets/styles/colors';
import PlusIcon from 'assets/icons/plus';
import { Container } from './addButton.style';

const AddButton = ({
  tooltip, className, buttonAction, disabled,
}) => (
  <Container className={className} disabled={disabled}>
    <ButtonTooltipIcon title={tooltip} buttonAction={buttonAction}>
      <PlusIcon baseColor={disabled ? colors.secundary_color_600 : colors.primary_color_600} />
    </ButtonTooltipIcon>
  </Container>
);

AddButton.propTypes = {
  tooltip: PropTypes.string,
  className: PropTypes.string,
  buttonAction: PropTypes.func,
  disabled: PropTypes.bool,
};

AddButton.defaultProps = {
  tooltip: '',
  className: '',
  buttonAction: () => {},
  disabled: false,
};

export default AddButton;
