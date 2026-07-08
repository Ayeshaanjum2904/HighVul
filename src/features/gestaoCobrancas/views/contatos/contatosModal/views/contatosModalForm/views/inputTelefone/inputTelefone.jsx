import React from 'react';
import PropTypes from 'prop-types';
import { formatTelefone } from 'utils/format';

import FormInput from 'common/controls/input/formInput';
import { makeStyles } from '@material-ui/core';
import AddButton from '../addButton';
import ListWithInput from '../listWithInput';
import InputRamal from '../inputRamal';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 80px',
    columnGap: '20px',
  },
});

const InputTelefone = ({
  telefone, setTelefone, errors,
  validateTelefone, isLoading, telefoneList, deleteTelefone,
}) => {
  const errorList = errors.filter((e) => e.propertyName === 'Telefone');
  const inputError = errorList.find((e) => e.index === null);

  const classes = useStyles();
  return (
    <ListWithInput
      items={telefoneList}
      deleteItem={deleteTelefone}
      validate={validateTelefone}
      errors={errorList}
      disableAction={isLoading}
      type="Telefone"
    >
      <div className={classes.container}>
        <FormInput
          type="number"
          label="Telefone"
          value={telefone}
          setValue={(value) => {
            setTelefone(value);
          }}
          disabled={false}
          format={formatTelefone}
          error={!!inputError}
          errorMessage={inputError?.message}
          InputProps={{
            endAdornment: <AddButton
              disabled={!telefone}
              isLoading={isLoading}
              onClick={validateTelefone}
            />,
          }}
        />
        <InputRamal />
      </div>
    </ListWithInput>
  );
};

InputTelefone.propTypes = {
  setTelefone: PropTypes.func,
  telefone: PropTypes.string,
  errors: PropTypes.array,
  validateTelefone: PropTypes.func,
  isLoading: PropTypes.bool,
  telefoneList: PropTypes.array,
  deleteTelefone: PropTypes.func,
};

InputTelefone.defaultProps = {
  setTelefone: () => {},
  telefone: null,
  errors: [],
  validateTelefone: () => {},
  isLoading: false,
  telefoneList: null,
  deleteTelefone: () => {},
};

export default InputTelefone;
