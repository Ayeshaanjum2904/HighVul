import React from 'react';
import PropTypes from 'prop-types';

import MarcaBadge from 'common/views/logoMarca';

import { formatCodigoConcessionaria, formatCnpj, formatNomeConcessionaria } from 'utils/format';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '1px 0px',
    borderRadius: '4px',
    padding: ' 8px 0 8px 8px',
    display: 'grid',
    gridTemplateColumns: '32px 1fr',
    gridTemplateRows: '24px 16px',
    gridTemplateAreas:
        '" icon   nome        "'
      + '" icon   descricao   "',
  },
  icon: {
    gridArea: 'icon',
    marginTop: '4px',
  },
  nome: {
    gridArea: 'nome',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#555770',
    marginLeft: '16px',
    display: 'flex',
    flexDirection: 'row',
  },
  descricao: {
    gridArea: 'descricao',
    marginLeft: '16px',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#8F9BB3',
  },
  divider: {
    backgroundColor: '#8F9BB3',
    width: '4px',
    height: '4px',
    borderRadius: '100',
    display: 'inline-flex',
    margin: '2px 4px',
  },

});

const DealerOption = ({
  concessionaria,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <MarcaBadge marca={concessionaria?.brand} />
      </div>
      <div className={classes.nome}>
        {formatNomeConcessionaria(concessionaria?.nome)}
      </div>
      <div className={classes.descricao}>
        {formatCnpj(concessionaria?.cnpj)}
        <div className={classes.divider} />
        {formatCodigoConcessionaria(
          concessionaria.corretorId !== 0
            ? concessionaria?.corretorId : concessionaria.codBuc,
        )}
      </div>
    </div>
  );
};

DealerOption.propTypes = {
  concessionaria: PropTypes.object,
};

DealerOption.defaultProps = {
  concessionaria: null,
};
export default DealerOption;
