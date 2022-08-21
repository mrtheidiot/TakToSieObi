import React from "react";
import classes from "./ShopItem.module.css";
import { useReducer, useState } from "react";

import ShopGallery from "./ShopGallery/ShopGallery";

import j1 from "./../assets/joker/j1.jpg";
import j2 from "./../assets/joker/j2.jpg";
import j3 from "./../assets/joker/j3.jpg";

// const shopGallery = [
//   { image: `${j1}`, alt: "alt" },
//   { image: `${j2}`, alt: "alt" },
//   { image: `${j3}`, alt: "alt" },
//   { image: `${j1}`, alt: "alt" },
//   { image: `${j2}`, alt: "alt" },
//   { image: `${j3}`, alt: "alt" },

// ];

const ShopItem = (props) => {
  const [current, setCurrent] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const shopGallery = props.imagesList;
  const listLength = shopGallery.length;

  const nextImage = () => {
    {
      current === listLength - 1
        ? setCurrent(0)
        : setCurrent((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    {
      current === 0
        ? setCurrent(listLength - 1)
        : setCurrent((prev) => prev - 1);
    }
  };

  const hadnleShopOverlay = () => {
    setShowOverlay((prev) => !prev); //to samo co w next i previous
    console.log(showOverlay);
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setShowOverlay(false);
    }
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainarea}>
        <div className={classes.gallery}>
          <ShopGallery
            imageList={shopGallery}
            showOverlay={showOverlay}
            hadnleShopOverlay={hadnleShopOverlay}
            nextImage={nextImage}
            prevImage={prevImage}
            listLength={listLength}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
        <div className={classes.description}>
          <div className={classes.description2}>
            <div className={classes.title_of_the_item}>{props.title}</div>
            <div className={classes.description_container}>
              <div className={classes.description_area}>Tutaj bedzie opis</div>
              <div className={classes.current_info}>
                {props.descriptionList[current].descs.map((item, index) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.galleryList}>
        {shopGallery.map((item, index) => (
          <div
            onClick={() => {
              setCurrent(index);
            }}
            index={index}
            className={classes.galleryListImage}
          >
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopItem;
