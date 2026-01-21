import { useCallback, useContext, useState } from "react";
import UserContext from "context/UserContext";
import loginService from "services/login";
import addFavService from "services/addFav";

const useUser = () => {
  const [loginState, setLoginState] = useState({
    loading: false,
    error: null
  });

  const { favs, jwt, setFavs, setJwt } = useContext(UserContext);

  const checkIfGifIsFaved = id => favs.some(favGifId => favGifId === id);

  const addFav = id =>
    addFavService({ id, jwt })
      .then(setFavs)
      .catch(err => console.error(err));

  const login = useCallback(
    async ({ username, password }) => {
      setLoginState({ loading: true, error: null });

      try {
        const jwt = await loginService({ username, password });
        setLoginState({ loading: false, error: null });
        setJwt(jwt);
      } catch (error) {
        setLoginState({ loading: false, error: error.message });
        throw error;
      }
    },
    [setJwt]
  );

  const clearLoginError = () =>
    setLoginState(prevState => ({
      ...prevState,
      error: null
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
