const validate = (values: any) => {
  const errors = {
    _error: ""
  };
  if (!values.login) {
    errors._error = "Required";
  } else if (values.login.length > 15) {
    errors._error = "Must be 15 characters or less";
  }
  return errors;
};

export default validate;
