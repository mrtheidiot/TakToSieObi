import React from "react";
import classes from "./Cennik.module.css";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

const Cennik = () => {
  const items = [
    { name: "Trening indywidualny", price: "70zł", link: "/treningi/trening-indywidualny" },
    { name: "Pakiet 6 treningów indywidualnych", price: "380zł", link: "/treningi/trening-indywidualny"},
    {
      name: "Kurs Posłuszenstwo II st. z elementami obedience",
      price: "500zl/8 spotkań",
      link: "/treningi/posluszenstwo-el-obd"
    },
    { name: "Kurs Obedience 1", price: "x", link: "/obedience-1" },
    { name: "Kurs Sportowy Szczeniak", price: "550zł/7 spotkań", link: "/treningi/sportowy-szczeniak" },
    { name: "Trening wspolny", price: "30zł", link: "/treningi/treningi-wspolne" },
    { name: "Pakiet 6 treningow wspolnych", price: "150zł", link: "/treningi/treningi-wspolne" },
  ];

  return (
    <>
      <Banner id={2} />
      <div className={classes.wrapper}>
        {items.map((item, index) => (
          <div className={classes.one_row_100_width}>
            <div key={index} className={classes.one_row_80_width}>
              <Link to={item.link}>
                <div className={classes.name}>{item.name}</div>
                
              </Link>
              <div className={classes.price}>{item.price}</div>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default Cennik;
