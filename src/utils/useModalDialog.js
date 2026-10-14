import { useEffect, useRef } from "react";

export function useModalDialog(isOpen, onClose) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function handleBackdropClick(event) {
    event.stopPropagation();
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      onClose();
    }
  }

  return { dialogRef, handleBackdropClick };
}
