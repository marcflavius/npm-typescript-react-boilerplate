// src/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <button>{children}</button>
);

export default Button;
