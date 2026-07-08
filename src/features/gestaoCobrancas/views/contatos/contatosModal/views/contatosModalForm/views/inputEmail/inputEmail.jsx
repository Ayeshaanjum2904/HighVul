import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';
import AddButton from '../addButton';
import ListWithInput from '../listWithInput';

const InputEmail = ({
  email, setEmail, errors,
  validateEmail, isLoading, emailList, deleteEmail,
}) => {
  const errorList = errors.filter((e) => e.propertyName === 'Email');
  const inputError = errorList.find((e) => e.index === null);

  return (
    <ListWithInput
      items={emailList}
      deleteItem={deleteEmail}
      validate={validateEmail}
      errors={errorList}
      disableAction={isLoading}
      type="Email"
    >
      <FormInput
        type="text"
        label="Email"
        value={email}
        setValue={(value) => {
          setEmail(value);
        }}
        disabled={false}
        error={!!inputError}
        errorMessage={inputError?.message}
        InputProps={{
          endAdornment: <AddButton
            disabled={!email}
            isLoading={isLoading}
            onClick={validateEmail}
          />,
        }}
      />
    </ListWithInput>
  );
};

InputEmail.propTypes = {
  setEmail: PropTypes.func,
  email: PropTypes.string,
  errors: PropTypes.array,
  validateEmail: PropTypes.func,
  isLoading: PropTypes.bool,
  emailList: PropTypes.array,
  deleteEmail: PropTypes.func,
};

InputEmail.defaultProps = {
  setEmail: () => {},
  email: null,
  errors: [],
  validateEmail: () => {},
  isLoading: false,
  emailList: null,
  deleteEmail: () => {},
};

export default InputEmail;
