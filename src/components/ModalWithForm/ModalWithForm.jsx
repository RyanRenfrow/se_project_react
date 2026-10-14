import "./ModalWithForm.css";
import { useModalDialog } from "../../utils/useModalDialog";

function ModalWithForm({
  title,
  name,
  buttonText,
  children,
  isOpen,
  onClose,
  onSubmit,
  isSubmitDisabled = false,
}) {
  const { dialogRef, handleBackdropClick } = useModalDialog(isOpen, onClose);
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onClose}
    >
      <dialog
        ref={dialogRef}
        className="modal__content"
        onCancel={onClose}
        onClick={handleBackdropClick}
        aria-labelledby={`${name}-title`}
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>
        <form name={name} onSubmit={onSubmit}>
          <h2 id={`${name}-title`}>{title}</h2>
          {children}
          <button
            className="modal__submit"
            type="submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </form>
      </dialog>
    </div>
  );
}
export default ModalWithForm;
