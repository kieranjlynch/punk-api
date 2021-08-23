import React from "react";
import styles from "./NavBar.module.scss";

// object destructuring in props
const NavBar = ({ searchTerm, updateSeachTerm, placeHolder }) => {
  return (
    <div className={styles.nav}>
      <input type="text" value={searchTerm} onChange={updateSeachTerm} placeholder={placeHolder} />
        <div className={styles.filterContainer}>
              <div className={styles.checkbox1}>
              <label className={styles.label} for="ABV">High ABV (6.0% +)</label>
              <input className={styles.checkbox} type="checkbox" id="ABV"/>
              </div>
              <div className={styles.checkbox2}>
              <label className={styles.label} for="Acidic">Acidic (ph under 4)</label>
              <input className={styles.checkbox} type="checkbox" id="Classic"/>
              </div>
              <div className={styles.checkbox3}>
              <label className={styles.label} for="Classic">Classic Range</label>
              <input className={styles.checkbox} type="checkbox" id="Acidic"/>
              </div>
        </div>
    </div>
  );
};

export default NavBar;