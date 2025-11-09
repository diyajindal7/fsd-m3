import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>inside the modal component</h2>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Modal;