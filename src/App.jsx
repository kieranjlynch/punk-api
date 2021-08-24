import React from 'react';
import Main from "./containers/Main/Main";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.title}>
        <h2>Brewdog Punk API</h2>
      </div>
      <Main />
  </>
  );
}

export default App;
