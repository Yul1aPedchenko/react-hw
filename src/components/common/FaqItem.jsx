import React, { useState } from "react";

function FaqItem({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} className="faq-q">
        <h2>{question}</h2>
        <p>Click here</p>
      </div>
      {isOpen && <div className="faq-a">{children}</div>}
    </div>
  );
}

export default FaqItem;
