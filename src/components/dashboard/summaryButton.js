import { useState } from "react";

const SummaryButton = ({ summary, rowNum }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!summary) return <span>-</span>;

  const dialogId = `dialog${rowNum}content`;

  return (
    <>
      <button className="button-link" onClick={() => setIsOpen(true)}>
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
          >
            ×
          </button>
          <p id={dialogId}>{summary}</p>
        </div>
      </div>
    </>
  );
};

export default SummaryButton;
