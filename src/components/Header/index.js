import { Link, useRoute, useLocation } from "wouter";
import useUser from "hooks/useUser";
import "./styles.css";

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
    headerOptions = <button onClick={handleLogout}>Logout</button>;
  } else {
    if (matchLogin) {
      headerOptions = <Link to="/register">Register</Link>;
    } else if (matchRegister) {
      headerOptions = <Link to="/login">Login</Link>;
    } else {
      headerOptions = (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      );
    }
  }

  return (
    <div className="Header-component">
      {headerOptions}
    </div>
  );
};

export default Header;
