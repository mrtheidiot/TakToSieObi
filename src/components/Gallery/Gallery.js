import { useState } from "react";
import ThumbnailGallery from "./ThumbnailGallery";
import FsLightbox from "fslightbox-react";

import classes from "./Gallery.module.css";

// This component uses external plugin to "onClick" show the full-sized images from props.source (array)

const Gallery = (props) => {
  const [toggler, setToggler] = useState(false);

  const sources = props.source.map(({ link }) => link);

  return (
    <>
      <div className={classes.wrapper} data-aos="fade-in">
        <ThumbnailGallery
          onClick={() => setToggler(!toggler)}
          source={sources}
          size={props.size}
        />
      </div>
      <FsLightbox toggler={toggler} sources={sources} type="image" />
    </>
  );
};

export default Gallery;
