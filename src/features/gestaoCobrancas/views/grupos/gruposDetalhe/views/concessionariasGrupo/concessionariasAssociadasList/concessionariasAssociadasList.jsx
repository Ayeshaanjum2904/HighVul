import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import ListConcessionariasRow from './concessionariasAssociadasListRow';

const useStyles = makeStyles({
  outer: {
    background: 'white',
    width: '100%',
    height: '100%',
  },
});

const ConcessionariasAssociadasList = ({ concessionarias, desassociarConcessionaria }) => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <Scrollbars>
        {(Array.isArray(concessionarias) ? concessionarias : []).map((c, i) => (
          <ListConcessionariasRow
            concessionaria={c}
            onClick={desassociarConcessionaria}
            key={i}
          />
        ))}
      </Scrollbars>
    </div>

  );
};

ConcessionariasAssociadasList.propTypes = {
  concessionarias: PropTypes.array,
  desassociarConcessionaria: PropTypes.func,
};

ConcessionariasAssociadasList.defaultProps = {
  concessionarias: [],
  desassociarConcessionaria: () => {},
};

export default ConcessionariasAssociadasList;
