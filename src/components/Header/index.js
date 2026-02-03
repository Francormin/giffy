import { useRoute, useLocation } from "wouter";
import useUser from "hooks/useUser";
import { HeaderButton, HeaderContainer, HeaderLink } from "./styles";

const Header = () => {
  const [, navigate] = useLocation();
  const [matchLogin] = useRoute("/login");
  const [matchRegister] = useRoute("/register");
  const { isLogged, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  let headerOptions;

  if (isLogged) {
    headerOptions = <HeaderButton onClick={handleLogout}>Logout</HeaderButton>;
  } else {
    if (matchLogin) {
      headerOptions = <HeaderLink to="/register">Register</HeaderLink>;
    } else if (matchRegister) {
      headerOptions = <HeaderLink to="/login">Login</HeaderLink>;
    } else {
      headerOptions = (
        <>
          <HeaderLink to="/login">Login</HeaderLink>
          <HeaderLink to="/register">Register</HeaderLink>
        </>
      );
    }
  }

  return <HeaderContainer>{headerOptions}</HeaderContainer>;
};

export default Header;
