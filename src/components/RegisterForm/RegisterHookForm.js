import { useForm } from "react-hook-form";
import RegisterLoading from "./RegisterLoading";
import Button from "components/Button";
import { AuthForm } from "styles/auth.styles";
import { AuthFormWrapper, InputErrorWrapper, ValidationError } from "./styles";

const RegisterHookForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  return (
    <>
      <RegisterLoading isSubmitting={isSubmitting} />

      <AuthFormWrapper disabled={isSubmitting}>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <InputErrorWrapper hasError={!!errors.username}>
            <input
              id="username"
              placeholder="At least 4 characters"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 4,
                  message: "Username must be at least 4 characters long"
                }
              })}
            />
          </InputErrorWrapper>
          {errors.username && <ValidationError>{errors.username.message}</ValidationError>}

          <label htmlFor="password">Password</label>
          <InputErrorWrapper hasError={!!errors.password}>
            <input
              id="password"
              type="password"
              placeholder="At least 8 characters"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long"
                }
              })}
            />
          </InputErrorWrapper>
          {errors.password && <ValidationError>{errors.password.message}</ValidationError>}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </AuthForm>
      </AuthFormWrapper>
    </>
  );
};

export default RegisterHookForm;
