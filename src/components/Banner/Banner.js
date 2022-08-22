import { useEffect, useState } from "react";
import banner1 from "./../../assets/Banners/banner1.png";
import banner2 from "./../../assets/Banners/banner2.png";
import banner3 from "./../../assets/Banners/banner3.png";
import banner4 from "./../../assets/Banners/banner4.png";
import banner5 from "./../../assets/Banners/banner5.png";

import classes from "./Banner.module.css";

// Banner shows the image at the top, below the Navigation Bar. 
// It uses the pageYOffset to show a parallax scrolling effect on the image.
// Component can receive props.image, props.id or none, and it will show image depening on that order (default = 1).

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

  const banner = props.image
    ? props.image
    : props.id
    ? Object.values(banners).filter((baner) => baner.id === props.id)[0]
    : { img: `${banner1}`, alt: "piesek", id: 1 };

  return (
    <div className={classes.wrapper}>
      <img
        src={banner.img}
        alt={banner.alt}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
    </div>
  );
};

export default Banner;
