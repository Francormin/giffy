import { useCallback, useState } from "react";
import useUser from "hooks/useUser";
import Modal from "components/Modal";
import LoginForm from "components/LoginForm";
import "./styles.css";

const Fav = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const { isLogged, checkIfGifIsFaved, addFav } = useUser();

  const [label, emoji] = checkIfGifIsFaved({ id })
    ? [
      "Remove Gif from favorites",
      "❌"
    ]
    : [
      "Add Gif to favorites",
      "❤️"
    ];

  const handleFavGif = () => {
    if (!isLogged) return setShowModal(true);
    addFav({ id });
  };

  const handleClose = useCallback(() => setShowModal(false), []);

  return (
    <>
      <button className="fav-button" onClick={handleFavGif}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>

      {showModal && (
        <Modal onClose={handleClose}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default Fav;
