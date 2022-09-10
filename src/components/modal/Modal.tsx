
import { BackdropCss,ModalCss } from "./styles";
import ReactDOM from "react-dom";

const Backdrop = (props: any) => {
  return <BackdropCss onClick={props.onClose}>Modal</BackdropCss>;
};
const ModalOverlay = (props: any) => {
  return (
    <ModalCss >
      <div className='content'>{props.children}</div>
    </ModalCss>
  );
};

const portalElement: any = document.getElementById("overlays");
const Modal = (props: any) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
