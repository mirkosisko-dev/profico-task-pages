import clsx from "clsx";

import { FC } from "react";

import styles from "./Button.module.scss";

interface IButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "transparent";
}

const Button: FC<IButtonProps> = ({
  label,
  variant = "primary",
  className,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(styles.button, {
        [className as string]: !!className,
        [styles.disabled]: disabled,
        [styles[variant]]: variant && !disabled,
      })}
    >
      {label}
    </button>
  );
};

export default Button;
