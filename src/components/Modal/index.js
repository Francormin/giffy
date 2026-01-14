import { createPortal } from "react-dom";
import "./styles.css";

const Modal = ({ children, onClose }) => {
  return createPortal(
    <div className="modal-container">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
