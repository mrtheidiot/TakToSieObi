import { useState } from "react";
import ThumbnailGallery from "./ThumbnailGallery";
import FsLightbox from "fslightbox-react";

import classes from "./Gallery.module.css";

// This component uses external plugin to "onClick" show the full-sized images from props.source (array)

const Gallery = (props) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div
        className={classes.wrapper}
        data-aos="fade-in"
        data-testid="thumbnail-gallery-container"
      >
        <ThumbnailGallery
          onClick={() => setToggler(!toggler)}
          source={props.sources}
          size={props.size}
        />
      </div>
      <FsLightbox
        toggler={toggler}
        sources={props.sources}
        type="image"
        customAttributes={[{ alt: "gallery-image" }]}
      />
    </>
  );
};

export default Gallery;
