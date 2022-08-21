import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import classes from "./Asortyment.module.css";
import szarpaki from "./../../assets/szarpaki.jpg";
import spodnicka1 from "./../../assets/SpodniczkiStandardowe/8.jpg";
import spodniczka2 from "./../../assets/SpodniczkiDlaWysokichPsow/4.jpg";

import React from "react";

const Asortyment = () => {
  const products = [
    { title: "Szarpaki", image: `${szarpaki}`, link: "/asortyment/szarpaki" },
    {
      title: "Spódniczki standardowe",
      image: `${spodnicka1}`,
      link: "/asortyment/spodniczki_standardowe",
    },
    {
      title: "Spódniczki dla wysokich psow",
      image: `${spodniczka2}`,
      link: "/asortyment/spodniczki_dla_wysokich_psow",
    },
  ];

  return (
    <>
      <Banner id={3} />
      <div className={classes.each_row_position_flex_column}>
        <div className={classes.wrapper_maxwitdh}>
          <div className={classes.wrapper}>
            {products.map((product, index) => (
              <div className={classes.box}>
                <div className={classes.image_in_the_box} key={index}>
                  <img src={product.image} alt="alt" />
                  <Link to={product.link}>
                    <div className={classes.title_in_the_box}>
                      <div className={classes.title_in_the_box_inner}>
                        {product.title}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Asortyment;
