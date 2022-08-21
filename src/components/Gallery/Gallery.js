import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import classes from "./Gallery.module.css";

const Gallery = (props) => {
  const [toggler, setToggler] = useState(false);

  let sources = props.source.map(({ link }) => link);
  
  let size = props.size ? props.size : "150";

  let side = {
    height: `${size}px`,
    width: `${size}px`,
  };

  return (
    <>
      <div className={classes.wrapper}>
        {sources.map((image, index) => (
          <div
            key={index}
            style={side}
            className={classes.thumbnail}
            onClick={() => setToggler(!toggler)}
          >
            <img src={image} />
          </div>
        ))}
      </div>
      <FsLightbox toggler={toggler} sources={sources} type="image" />
    </>
  );
};

export default Gallery;
