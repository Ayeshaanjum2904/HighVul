import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PopperComponent from 'common/controls/popperComponent/popperComponent';
import AlertCard from 'common/layout/alertCard/alertCard';
import colors from 'assets/styles/colors';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { ClickAwayListener } from '@material-ui/core';

const OpenFormButton = ({ preventAction, onClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonRef = useRef(null);

  const handleOnClick = () => {
    if (preventAction) {
      setAnchorEl(buttonRef?.current);
    } else {
      setAnchorEl(null);
      onClick(true);
    }
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Button onClick={handleOnClick} variant="outlined" color="primary500" ref={buttonRef}>
          <AddRoundedIcon style={{ fontSize: '18px', marginRight: '8px' }} />
          Adicionar documento para formalizar
        </Button>
      </ClickAwayListener>
      <PopperComponent anchorEl={anchorEl}>
        <AlertCard
          width="100%"
          title="Já existe um documento em criação, salve ou apague para adicionar novo."
          icone={<WarningRoundedIcon htmlColor={colors.error_color_300} sx={{ fontSize: '16px' }} />}
          colorBase={colors.error_color_300}
          alertCardContent="8px"
        />
      </PopperComponent>
    </>
  );
};
OpenFormButton.propTypes = {
  preventAction: PropTypes.bool,
  onClick: PropTypes.func,
};
OpenFormButton.defaultProps = {
  preventAction: false,
  onClick: () => {},
};

export default OpenFormButton;
