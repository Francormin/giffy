import { Link, useRoute, useLocation } from "wouter";
import useUser from "hooks/useUser";
import "./styles.css";

const Header = () => {
  const [, navigate] = useLocation();
  const [match] = useRoute("/login");
  const { isLogged, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const renderLogButtons = () =>
    isLogged
      ? <button onClick={handleLogout}>Logout</button>
      : <Link to="/login">Login</Link>;

  const content = match ? null : renderLogButtons();

  return (
    <div className="Header-component">
      {content}
    </div>
  );
};

export default Header;
