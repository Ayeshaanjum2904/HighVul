import React from 'react';
import PropTypes from 'prop-types';

import Select from 'common/controls/select';
import { makeStyles } from '@material-ui/styles';

const produtos = [
  { text: 'Todos os pedidos', value: 'all' },
  { text: 'Test drive convencional', value: 'convencional' },
  { text: 'Test drive exceção', value: 'excecao' },
  { text: 'Test drive adicional', value: 'adicional' },
];

const useStyles = makeStyles({
  container: {
    marginTop: '-20px',
    marginRight: '8px',
    width: '100%',
  },
});

const SelectProdutoPedidosArea = ({
  produto, setProduto,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Select
        items={produtos}
        label=""
        value={produto || 'all'}
        onSelect={(p) => {
          setProduto(p === 'all' ? null : p);
        }}
        placeholder=""
      />
    </div>
  );
};

SelectProdutoPedidosArea.propTypes = {
  produto: PropTypes.string,
  setProduto: PropTypes.func,
};

SelectProdutoPedidosArea.defaultProps = {
  produto: '',
  setProduto: () => {},
};

export default SelectProdutoPedidosArea;
