import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import NavBar from "../../components/NavBar";
import CardList from "../../components/CardList";

const Main = () => {
  // tuple with variable then function set equal to useState and 
  // passed default value of empty Arr
  const [beers, setBeers] = useState([]);
  
  const [searchTerm, setSeachTerm] = useState("");

  // async await function to fetch the data from the API, convert it to object and pass it to setBeers function to render in the component using state
  const fetchData = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const result = await response.json();
    setBeers(result);
  };

  // updates state when component loads with whatever function is passed
  useEffect(() => {
    fetchData();
    // useEffect takes in an Arr of dependancies, which will tell useEffect
    // to run when something in the Arr changes. As this Arr is empty, it will render once
  }, []);

  return (
    <div className={styles.main}>
      <nav>
        <NavBar
        // the value in set state for the search
          searchTerm={searchTerm}
          // the updated value as the user enters chars, 
          // converted to lower case as its case sensitive, then passed to the setSeachTerm function
          updateSeachTerm={(e) => setSeachTerm(e.target.value.toLowerCase())}
          placeHolder="Search..."
        />
      </nav>
      <main>
        <CardList beers={beers.filter((beer) => beer.name.toLowerCase().includes(searchTerm))} />
      </main>
    </div>
  );
};

export default Main;