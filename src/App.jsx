import React from 'react';
import Main from "./containers/Main/Main";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.title}>
        <p>Brewdog Punk API</p>
      </div>
      <Main />
  </>
  );
}

export default App;
