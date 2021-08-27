import React from "react";
import styles from "./NavBar.module.scss";

// object destructuring in props
const NavBar = ({ searchTerm, updateSeachTerm, placeHolder }) => {
  return (
    <div className={styles.nav}>
      <input type="text" value={searchTerm} onChange={updateSeachTerm} placeholder={placeHolder} />
    </div>
  );
};

export default NavBar;