import React, { useState, useEffect } from "react";
import classes from "./Test.module.css";
import TestItem from "./TestItem";
import { useSelector } from "react-redux";
const Test = () => {
  const tutorials = useSelector((state) => state.test.testItems);
  console.log(tutorials)

  return (
    <>
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
      </div>
      <div className={classes.box}>
        Ten box posiada w sobie tekst.
        <div className={classes.innerBox}></div>
      </div>
    </>
  );
};

export default Test;
