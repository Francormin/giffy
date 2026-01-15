import { useEffect, useState } from "react";
import useUser from "hooks/useUser";
import Modal from "components/Modal";
import LoginForm from "components/LoginForm";
import "./styles.css";

const Fav = ({ id }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    isLogged,
    login,
    loginIsLoading,
    loginHasError,
    clearLoginError,
    checkIfGifIsFaved,
    addFav
  } = useUser();

  const isFaved = checkIfGifIsFaved(id);
  const label = isFaved ? "Remove Gif from favorites" : "Add Gif to favorites";
  const emoji = isFaved ? "❌" : "❤️";

  const handleFavGif = () => {
    if (!isLogged) return setShowModal(true);
    addFav(id);
  };

  const handleCloseModal = () => {
    clearLoginError();
    setShowModal(false);
  };

  useEffect(() => {
    if (isLogged && showModal) setShowModal(false);
  }, [isLogged, showModal]);

  return (
    <>
      <button className="fav-button" onClick={handleFavGif}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <LoginForm
            login={login}
            loading={loginIsLoading}
            error={loginHasError}
          />
        </Modal>
      )}
    </>
  );
};

export default Fav;
