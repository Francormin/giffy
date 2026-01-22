import { useForm } from "react-hook-form";
import RegisterLoading from "./RegisterLoading";

const RegisterHookForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  return (
    <>
      <RegisterLoading isSubmitting={isSubmitting} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`auth-form ${isSubmitting ? "disabled" : ""}`}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 4,
              message: "Username must be at least 4 characters long"
            }
          })}
          className={`auth-input ${errors.username ? "error" : ""}`}
        />
        {errors.username && <small className="validation-error">{errors.username.message}</small>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            }
          })}
          className={`auth-input ${errors.password ? "error" : ""}`}
        />
        {errors.password && <small className="validation-error">{errors.password.message}</small>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </>
  );
};

export default RegisterHookForm;
