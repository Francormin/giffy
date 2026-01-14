import { useCallback, useContext, useState } from "react";
import UserContext from "context/UserContext";
import loginService from "services/login";
import addFavService from "services/addFav";

const useUser = () => {
  const [loginState, setLoginState] = useState({
    loading: false,
    error: false
  });

  const { favs, jwt, setFavs, setJwt } = useContext(UserContext);

  const checkIfGifIsFaved = id => favs.some(favGifId => favGifId === id);

  const addFav = id =>
    addFavService({ id, jwt })
      .then(setFavs)
      .catch(err => console.error(err));

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

  const clearLoginError = () =>
    setLoginState(prevState => ({
      ...prevState,
      error: false
    }));

  const logout = () => setJwt(null);

  return {
    checkIfGifIsFaved,
    addFav,
    isLogged: Boolean(jwt),
    login,
    loginIsLoading: loginState.loading,
    loginHasError: loginState.error,
    clearLoginError,
    logout
  };
};

export default useUser;
