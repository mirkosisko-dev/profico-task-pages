import { FC } from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";

import styles from "./Input.module.scss";

interface IInputProps {
  name: string;
  control: Control<any>;
  validations?: RegisterOptions;
  disabled?: boolean;
  type?: "email" | "password";
  label: string;
  error?: string;
  onChangeHandler?: () => void;
}

const Input: FC<IInputProps> = ({
  name,
  control,
  validations,
  label,
  type,
  disabled = false,
  error,
  onChangeHandler,
}) => {
  return (
    <div className={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={{ ...validations }}
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <div className={styles.inputContainer}>
              <p className={styles.label}>{label}</p>
              <input
                type={type}
                className={styles.input}
                // disabled={!disabled}
                onBlur={() => {
                  onBlur();
                }}
                value={value}
                onChange={(e) => {
                  onChange(e);
                  if (onChangeHandler) {
                    onChangeHandler();
                  }
                }}
              />
            </div>
          );
        }}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
