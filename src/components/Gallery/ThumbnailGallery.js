import classes from "./ThumbnailGallery.module.css";

//ThumbnailGallery is a component that shows thumbails of an array of imagesoruces,
//takes optional parameter "size" to determine the size of a thumbnail,
//takes optional onClick function:
//  -if it's "onDelete" -> it's going to execute return function with an image as an argument
//  -if it's "onClick" -> it's going to execute the function without any arguments

const ThumbnailGallery = (props) => {
  const boxSize = props.size
    ? {
        height: `${props.size}px`,
        width: `${props.size}px`,
      }
    : {
        height: "140px",
        width: "140px",
      };

  const onClickReturn = (event) => {
    props.onDelete(event);
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
          data-testid="thumbnail-image"
        >
          <img src={image} />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailGallery;
