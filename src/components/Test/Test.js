import React, { useState, useEffect } from "react";
import classes from "./Test.module.css";
import TestItem from "./TestItem";
import NewTutorial from "./NewTutorial";
import PatchTutorial from "./PatchTutorial";
const Test = () => {
  const [tutorials, setTutorials] = useState([]);
  const getTutorials = async () => {
    console.log("Fetching started");
    const response = await fetch("http://localhost:8000/api/tutorials");
    const data = await response.json();
    console.log(data);
    setTutorials(data);
  };

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div className={classes.centered}>
      <h1>Komponent sie renderuje</h1>
      {tutorials.map((tutorial, index) => (
        <TestItem
          key={index}
          title={tutorial.title}
          description={tutorial.description}
          id={tutorial.id}
        />
      ))}
      <NewTutorial />
      <br />
      <PatchTutorial />
    </div>
  );
};

export default Test;
