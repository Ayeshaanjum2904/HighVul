import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';
import FiatIcon from 'assets/icons/marcaBadge/fiat-logo';
import JeepIcon from 'assets/icons/marcaBadge/jeep-logo';
import RamIcon from 'assets/icons/marcaBadge/ram-logo';
import ChryslerIcon from 'assets/icons/marcaBadge/chrysler-logo';
import DodgeIcon from 'assets/icons/marcaBadge/dodge-logo';
import PeugeotLogoIcon from 'assets/icons/marcaBadge/peugeot-logo';
import CitroenLogoIcon from 'assets/icons/marcaBadge/citroen-logo';
import DefaultIcon from 'assets/icons/marcaBadge/default-icon';
import LeapLogoIcon from 'assets/icons/marcaBadge/leap-logo';

const BRAND_CONFIG = {
  fiat: {
    backgroundColor: colors.background_color_fiat,
    icon: FiatIcon,
  },
  jeep: {
    backgroundColor: colors.background_color_jeep,
    icon: JeepIcon,
  },
  dodge: {
    backgroundColor: colors.background_color_dodge,
    icon: DodgeIcon,
  },
  ram: {
    backgroundColor: colors.background_color_ram,
    icon: RamIcon,
  },
  chrysler: {
    backgroundColor: colors.background_color_chrysler,
    icon: ChryslerIcon,
  },
  citroen: {
    backgroundColor: colors.background_color_citroen,
    icon: CitroenLogoIcon,
  },
  peugeot: {
    backgroundColor: colors.background_color_peugeot,
    icon: PeugeotLogoIcon,
  },
  leap: {
    backgroundColor: colors.background_color_leap,
    icon: LeapLogoIcon,
  },
  default: {
    backgroundColor: '#FFFFFF',
    icon: DefaultIcon,
  },
};

const useStyles = makeStyles({
  containerBase: {
    height: '32px',
    width: '32px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerColor: ({ marca }) => {
    const brandKey = String(marca).toLowerCase();
    const config = BRAND_CONFIG[brandKey] || BRAND_CONFIG.default;
    return { backgroundColor: config.backgroundColor };
  },
});

const LogoMarca = ({ marca }) => {
  const classes = useStyles({ marca });
  const brandKey = String(marca).toLowerCase();
  const BrandIcon = BRAND_CONFIG[brandKey]?.icon || BRAND_CONFIG.default.icon;

  return (
    <div className={`${classes.containerBase} ${classes.containerColor}`}>
      <BrandIcon />
    </div>
  );
};

LogoMarca.propTypes = {
  marca: PropTypes.string,
};

LogoMarca.defaultProps = {
  marca: '',
};

export default LogoMarca;
