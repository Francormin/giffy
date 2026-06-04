import { useRoute, useLocation } from "wouter";
import useUser from "hooks/useUser";
import { NavbarButton, NavbarContainer, NavbarLink } from "./styles";

const Navbar = () => {
  const [, navigate] = useLocation();
  const [matchLogin] = useRoute("/login");
  const [matchRegister] = useRoute("/register");
  const { isLogged, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  let navbarOptions;

  if (isLogged) {
    navbarOptions = (
      <>
        <NavbarLink to="/favs">My Favs</NavbarLink>
        <NavbarButton onClick={handleLogout}>Logout</NavbarButton>
      </>
    );
  } else {
    if (matchLogin) {
      navbarOptions = <NavbarLink to="/register">Register</NavbarLink>;
    } else if (matchRegister) {
      navbarOptions = <NavbarLink to="/login">Login</NavbarLink>;
    } else {
      navbarOptions = (
        <>
          <NavbarLink to="/login">Login</NavbarLink>
          <NavbarLink to="/register">Register</NavbarLink>
        </>
      );
    }
  }

  return <NavbarContainer>{navbarOptions}</NavbarContainer>;
};

export default Navbar;
