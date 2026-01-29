import Text from "components/Text";

const RegisterLoading = ({ isSubmitting }) => {
  if (!isSubmitting) return null;
  return <Text className="auth-loading">Registering user...</Text>;
};

export default RegisterLoading;
