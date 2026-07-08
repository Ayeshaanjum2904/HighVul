import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { X } from 'react-feather';

import ButtonIcon from 'common/controls/buttonIcon';
import DealerOption from '../concessionariaSelector/dealerOption';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    paddingRight: '8px',
    gridTemplateAreas: "'concessionaria  close '",
    gridTemplateColumns: '1fr 1.5em ',
    gridTemplateRows: 'auto',
    width: '100%',
  },
  item: {
    fontSize: '14px',
    color: '#555770',
    display: 'flex',
    alignItems: 'center',
  },
  concessionaria: {
    gridArea: 'concessionaria',
  },
  close: {
    gridArea: 'close',
    textAlign: 'end',
  },
});

const ConcessionariasAssociadasListRow = ({ concessionaria, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.concessionaria}`}>
        <DealerOption concessionaria={concessionaria} />
      </div>
      <div className={`${classes.item} ${classes.close}`}>
        <ButtonIcon onClick={() => onClick(concessionaria?.codBuc)}>
          <X size="20px" />
        </ButtonIcon>
      </div>
    </div>
  );
};

ConcessionariasAssociadasListRow.propTypes = {
  concessionaria: PropTypes.object,
  onClick: PropTypes.func,
};

ConcessionariasAssociadasListRow.defaultProps = {
  concessionaria: null,
  onClick: () => {},
};

export default ConcessionariasAssociadasListRow;
