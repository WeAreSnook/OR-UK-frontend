import { useState, useRef, useEffect } from "react";

const SummaryButton = ({ summary, rowNum }) => {
  const [isOpen, setIsOpen] = useState(false);
  const readRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeRef.current.focus();
    } else {
      document.body.style.overflow = "scroll";
      readRef.current.focus();
    }
  }, [isOpen]);

  if (!summary) return <span>-</span>;

  const dialogId = `dialog${rowNum}content`;

  return (
    <>
      <button
        className="button-link"
        onClick={() => setIsOpen(true)}
        ref={readRef}
      >
        Read
      </button>
      <div className={`modal-background ${isOpen ? "visible" : ""}`}>
        <div
          className={`modal ${isOpen ? "visible" : ""}`}
          role="dialog"
          aria-labelledby={dialogId}
          aria-modal="true"
        >
          <button
            className="close-button button-link"
            onClick={() => setIsOpen(false)}
            ref={closeRef}
          >
            close
          </button>
          <p id={dialogId}>{summary}</p>
        </div>
      </div>
    </>
  );
};

export default SummaryButton;
