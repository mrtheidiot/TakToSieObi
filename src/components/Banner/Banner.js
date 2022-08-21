import React, { useEffect, useState } from "react";
import classes from "./Banner.module.css";

import banner1 from "./../../assets/Banners/banner1.png";
import banner2 from "./../../assets/Banners/banner2.png";
import banner3 from "./../../assets/Banners/banner3.png";
import banner4 from "./../../assets/Banners/banner4.png";
import banner5 from "./../../assets/Banners/banner5.png";

const Banner = (props) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const banners = [
    { img: `${banner1}`, alt: "piesek", id: 1 },
    { img: `${banner2}`, alt: "piesek", id: 2 },
    { img: `${banner3}`, alt: "piesek", id: 3 },
    { img: `${banner4}`, alt: "piesek", id: 4 },
    { img: `${banner5}`, alt: "piesek", id: 5 },
  ];
  let { img, alt } = Object.values(banners).filter(
    (baner) => baner.id === props.id
  )[0];

  if (props.imageURL) {
    img = props.imageURL;
  }

  return (
    <div className={classes.wrapper}>
      <img
        src={img}
        alt={alt}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
    </div>
  );
};

export default Banner;
