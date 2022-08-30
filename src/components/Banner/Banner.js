import banner1 from "./../../assets/Banners/banner1.png";
import banner2 from "./../../assets/Banners/banner2.png";
import banner3 from "./../../assets/Banners/banner3.png";
import banner4 from "./../../assets/Banners/banner4.png";
import banner5 from "./../../assets/Banners/banner5.png";

import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import classes from "./Banner.module.css";

// Banner shows the image at the top, below the Navigation Bar.
// It uses the 'react-scroll-parallax' to show a parallax scrolling effect on the image.
// Component can receive props.image, props.id or none, and it will show image depening on that order (default = 3).

const Banner = (props) => {
  const banners = [
    { img: `${banner1}`, alt: "tak to sie obi banner image", id: 1 },
    { img: `${banner2}`, alt: "tak to sie obi banner image", id: 2 },
    { img: `${banner3}`, alt: "tak to sie obi banner image", id: 3 },
    { img: `${banner4}`, alt: "tak to sie obi banner image", id: 4 },
    { img: `${banner5}`, alt: "tak to sie obi banner image", id: 5 },
  ];

  const banner = props.image
    ? props.image
    : props.id
    ? Object.values(banners).filter((baner) => baner.id === props.id)[0]
    : { img: `${banner3}`, alt: "tak to sie obi banner image", id: 3};

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[{ image: banner.img, speed: -15 }]}
        className={classes.banner}
      />
    </ParallaxProvider>
  );
};

export default Banner;
