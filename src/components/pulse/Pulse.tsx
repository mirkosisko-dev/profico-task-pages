import { FC } from "react";

import styles from "./Pulse.module.scss";

const Pulse: FC = () => {
  return (
    <div className={styles.pulse}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Pulse;
