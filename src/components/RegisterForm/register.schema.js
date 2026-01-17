export const initialValues = {
  username: "",
  password: ""
};

export const validateFields = ({ username, password }) => {
  const errors = {};

  if (!username) {
    errors.username = "Username is required";
  } else if (username && username.length < 4) {
    errors.username = "Username must be at least four characters long";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password && password.length < 8) {
    errors.password = "Password must be at least eight characters long";
  }

  return errors;
};
