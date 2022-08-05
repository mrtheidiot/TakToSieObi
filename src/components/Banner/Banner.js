import React from "react";

import "./Banner.css";
import classes from './Banner.module.css';

import dog1 from "./../../assets/dogo1.jpg";
import dog2 from "./../../assets/dogo2.jpg";
import dog3 from "./../../assets/dogo3.jpg";
import dog4 from "./../../assets/p4.jpg";
import dog5 from "./../../assets/dogo4.png";
import dog6 from "./../../assets/rivia/r1.jpg";

import banner1 from "./../../assets/Bannery/banner1.png";
import banner2 from "./../../assets/Bannery/banner2.png";
import banner3 from "./../../assets/Bannery/banner3.png";
import banner4 from "./../../assets/Bannery/banner4.png";
import banner5 from "./../../assets/Bannery/banner5.png";

const Banner = (props) => {
  const banners = [
    { img: `${banner1}`, alt: "piesek", id: 1 },
    { img: `${banner2}`, alt: "piesek", id: 2 },
    { img: `${banner3}`, alt: "piesek", id: 3 },
    { img: `${banner4}`, alt: "piesek", id: 4 },
    { img: `${banner5}`, alt: "piesek", id: 7 },
    { img: `${dog5}`, alt: "piesek", id: 5 },
    { img: `${dog6}`, alt: "piesek", id: 6 },
  ];
  const { img, alt } = Object.values(banners).filter(
    (baner) => baner.id === props.id
  )[0];

  return (
    <>
      {/* <div className={classes.message}>{props.message}</div> */}
      <div className="mainPicture-main">
        <img src={img} alt={alt} />
      </div>
    </>
  );
};

export default Banner;
