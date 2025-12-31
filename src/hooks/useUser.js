import { useCallback, useContext, useState } from "react";
import UserContext from "context/UserContext";
import loginService from "services/login";

const useUser = () => {
  const [loginState, setLoginState] = useState({
    loading: false,
    error: false
  });

  const { jwt, setJwt } = useContext(UserContext);

  const login = useCallback(
    ({ username, password }) => {
      setLoginState({ loading: true, error: false });
      loginService({ username, password })
        .then(jwt => {
          setLoginState({ loading: false, error: false });
          setJwt(jwt);
        })
        .catch(() => setLoginState({ loading: false, error: true }));
    },
    [setJwt]
  );

  const logout = useCallback(() => setJwt(null), [setJwt]);

  return {
    isLogged: Boolean(jwt),
    login,
    loginIsLoading: loginState.loading,
    loginHasError: loginState.error,
    logout
  };
};

export default useUser;
