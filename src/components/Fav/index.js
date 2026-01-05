import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import "./styles.css";

const Fav = ({ id }) => {
  const [, navigate] = useLocation();
  const { isLogged } = useUser();

  const handleFavGif = () => {
    if (!isLogged) return navigate("/login");
    console.log("Fav gif with id:", id);
  };

  return (
    <button className="fav-button" onClick={handleFavGif}>
      <span aria-label="Fav Gif" role="img">
        ❤️
      </span>
    </button>
  );
};

export default Fav;
