import { createPortal } from "react-dom";
import { CloseButton, Content, Overlay } from "./styles";

const Modal = ({ children, onClose }) => {
  return createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✖</CloseButton>
        {children}
      </Content>
    </Overlay>,
    document.body
  );
};

export default Modal;
