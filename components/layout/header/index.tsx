import React, { ReactElement } from "react";
import styles from "./header.module.scss";

function Header(): ReactElement {
  return <div className={styles.header}>Green Radar</div>;
}

export default Header;
