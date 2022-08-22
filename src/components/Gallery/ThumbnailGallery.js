import classes from "./ThumbnailGallery.module.css";

const ThumbnailGallery = (props) => {
  const onClickReturn = (event) => {
    props.onDelete(event);
  };

  const boxSize = props.size
    ? {
        height: `${props.size}px`,
        width: `${props.size}px`,
      }
    : {
        height: "150px",
        width: "150px",
      };

  const onClickHandler = props.onDelete
    ? onClickReturn
    : props.onClick
    ? props.onClick
    : () => {};

  const source = props.source[0] === "" ? [] : props.source;

  return (
    <div className={classes.wrapper}>
      {source.map((image, index) => (
        <div
          key={index}
          onClick={onClickHandler}
          className={classes.thumbnail}
          style={boxSize}
        >
          <img src={image} />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailGallery;
