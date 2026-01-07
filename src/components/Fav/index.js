import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import "./styles.css";

const Fav = ({ id }) => {
  const [, navigate] = useLocation();
  const { isLogged, checkIfGifIsFaved, addFav } = useUser();

  const handleFavGif = () => {
    if (!isLogged) return navigate("/login");
    addFav({ id });
  };

  const [label, emoji] = checkIfGifIsFaved({ id })
    ? [
      "Remove Gif from favorites",
      "❌"
    ]
    : [
      "Add Gif to favorites",
      "♥"
    ];

  return (
    <button className="fav-button" onClick={handleFavGif}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  );
};

export default Fav;
