import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import InputEdit from 'common/controls/inputEdit';
import InputRamal from '../../inputRamal/inputRamal';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    paddingRight: '12px',
    gridTemplateAreas: (props) => (props.isTelefone ? '1fr 80px' : "'input'"),
    columnGap: '20px',
    gridTemplateColumns: (props) => (props.isTelefone ? '1fr 80px' : '1fr'),
    gridTemplateRows: '55px',
    width: '100%',
  },
  item: {
    fontSize: '14px',
    color: '#555770',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    gridArea: 'text',
  },
  close: {
    gridArea: 'close',
    textAlign: 'end',
  },
});

const ListItem = ({
  item, onClick, validate, error, disabled, removeError, type, setRamalList,
}) => {
  const setValueInput = (value) => {
    validate(value, item?.index);
  };

  const setValueRamal = (value) => {
    setRamalList(value, item?.index);
  };

  const formatTelefone = (inputValue) => {
    let localValue = inputValue;

    localValue = inputValue.replace(/[^\d]/g, '');
    if (localValue.length > 11) localValue = localValue.slice(0, 11);

    if (localValue.length === 11) localValue = localValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    else localValue = localValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');

    return localValue;
  };

  const isTelefone = type === 'Telefone';

  const classes = useStyles({ isTelefone });
  return (
    <div className={classes.container}>
      <InputEdit
        type={isTelefone ? 'number' : ''}
        format={isTelefone ? formatTelefone : null}
        setValue={setValueInput}
        value={item?.email ?? `${formatTelefone(item?.telefone)}`}
        deleteAction={() => onClick(item)}
        cancelAction={() => error && removeError(type, item?.index)}
        error={error}
        disabled={disabled}
      />
      {isTelefone
        ? (
          <InputRamal
            ramal={item?.ramal}
            setRamal={setValueRamal}
            hideLabel
          />
        ) : null}
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  validate: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  removeError: PropTypes.func,
  type: PropTypes.string.isRequired,
  setRamalList: PropTypes.func,
};

ListItem.defaultProps = {
  item: null,
  onClick: () => {},
  validate: () => {},
  error: '',
  disabled: false,
  removeError: () => {},
  setRamalList: () => {},
};

export default ListItem;
