import { useCallback, useContext } from "react";
import UserContext from "context/UserContext";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const login = useCallback(
    ({ username, password }) => setUser({ username, password }),
    [setUser]
  );

  const logout = useCallback(
    () => setUser(null),
    [setUser]
  );

  return {
    isLogged: Boolean(user),
    login,
    logout
  };
};

export default useUser;
