const RegisterLoading = ({ isSubmitting }) => {
  if (!isSubmitting) return null;
  return <p className="auth-loading">Registering user...</p>;
};

export default RegisterLoading;
