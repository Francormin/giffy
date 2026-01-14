import "./styles.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
