import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { X } from 'react-feather';

import ButtonIcon from 'common/controls/buttonIcon';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    padding: '0px 8px 0px 8px',
    paddingRight: '8px',
    gridTemplateAreas: "'contato  close '",
    gridTemplateColumns: '1fr 1.5em ',
    gridTemplateRows: '30px',
    width: '100%',
  },
  item: {
    fontSize: '14px',
    color: '#555770',
    display: 'flex',
    alignItems: 'center',
  },
  contato: {
    gridArea: 'contato',
  },
  close: {
    gridArea: 'close',
    textAlign: 'end',
  },
});

const ConcessionariasAssociadasListRow = ({ contato, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.contato}`}>
        {contato?.text}
      </div>
      <div className={`${classes.item} ${classes.close}`}>
        <ButtonIcon onClick={() => onClick(contato?.value)}>
          <X size="20px" />
        </ButtonIcon>
      </div>
    </div>
  );
};

ConcessionariasAssociadasListRow.propTypes = {
  contato: PropTypes.object,
  onClick: PropTypes.func,
};

ConcessionariasAssociadasListRow.defaultProps = {
  contato: null,
  onClick: () => {},
};

export default ConcessionariasAssociadasListRow;
