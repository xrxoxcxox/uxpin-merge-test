import styles from "../styles/Button.module.css";
import clsx from "clsx";

interface Props {
  label?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  label = "label",
  variant = "primary",
  size = "medium",
}: Props): JSX.Element => (
  <button type="button" className={clsx(styles.button, styles[variant], styles[size])}>
    {label}
  </button>
);
