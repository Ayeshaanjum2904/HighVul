import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import ButtonIcon from 'common/controls/buttonIcon';
import { trackedProperties } from 'modules';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    width: '65px',
    height: '65px',
    borderRadius: '24px',
    display: 'inline-block',
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    border: '1px solid #EDF1F7',
    background: 'rgba(228, 233, 242, 0.16)',
  },
  active: {
    border: `2px solid ${colors.primary_color_600}`,
    background: colors.primary_color_100_36,
  },
  button: {
    margin: '0px 8px 8px 0px',
  },
});

const CardPreview = ({ url, urlVeiculo, setUrlVeiculo }) => {
  const classes = useStyles();
  const cardSelected = url === urlVeiculo;
  return (
    <ButtonIcon
      className={classes.button}
      onClick={() => setUrlVeiculo(url)}
      mixpanelTarget="Selecionar UrlVeiculo disponível"
      mixpanelPage={trackedProperties.veiculosPage}
    >
      <div className={`${classes.container} ${cardSelected ? classes.active : classes.item}`}>
        <div className={classes.content}>
          <img src={url} alt="Veiculo" />
        </div>
      </div>
    </ButtonIcon>
  );
};

CardPreview.propTypes = {
  urlVeiculo: PropTypes.string,
  url: PropTypes.string,
  setUrlVeiculo: PropTypes.func,
};

CardPreview.defaultProps = {
  urlVeiculo: null,
  url: null,
  setUrlVeiculo: () => {},
};

export default CardPreview;
