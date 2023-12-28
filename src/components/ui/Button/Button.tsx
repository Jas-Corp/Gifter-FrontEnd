import { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.scss";

interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: FC<InputProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
export default Button;
