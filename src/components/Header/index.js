import { Link, useRoute } from "wouter";
import useUser from "hooks/useUser";
import "./styles.css";

const Header = () => {
  const [match] = useRoute("/login");
  const { isLogged, logout } = useUser();

  const renderLogButtons = () =>
    isLogged
      ? <button onClick={logout}>Logout</button>
      : <Link to="/login">Login</Link>;

  const content = match ? null : renderLogButtons();

  return (
    <div className="Header-component">
      {content}
    </div>
  );
};

export default Header;
