// src/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      {children}
    </div>
  );
};

export default Modal;
