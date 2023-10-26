/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import "./Modal.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ children, closeModal }) => (
  <div className="modal-container" onClick={closeModal}>
    {children}
  </div>
);

export default Modal;
