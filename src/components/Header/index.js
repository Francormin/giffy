import { Link } from "wouter";
import useUser from "hooks/useUser";
import "./styles.css";

const Header = () => {
  const { isLogged, logout } = useUser();

  return (
    <div className="Header-component">
      {isLogged
        ? <button onClick={logout}>Logout</button>
        : <Link to="/login">Login</Link>}
    </div>
  );
};

export default Header;
