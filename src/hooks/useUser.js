import { useCallback, useContext, useState } from "react";
import UserContext from "context/UserContext";
import loginService from "services/login";

const useUser = () => {
  const [loginState, setLoginState] = useState({
    loading: false,
    error: false
  });

  const { user, setUser } = useContext(UserContext);

  const login = useCallback(
    ({ username, password }) => {
      setLoginState({ loading: true, error: false });
      loginService({ username, password })
        .then(jwt => {
          setLoginState({ loading: false, error: false });
          setUser(jwt);
        })
        .catch(() => setLoginState({ loading: false, error: true }));
    },
    [setUser]
  );

  const logout = useCallback(() => setUser(null), [setUser]);

  return {
    isLogged: Boolean(user),
    login,
    loginIsLoading: loginState.loading,
    loginHasError: loginState.error,
    logout
  };
};

export default useUser;
