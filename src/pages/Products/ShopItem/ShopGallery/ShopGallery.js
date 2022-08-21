import classes from "./ShopGallery.module.css";
import { useReducer, useState } from "react";
import ShopOverlay from "./ShopOverlay";

const ShopGallery = (props) => {
  // const [current, setCurrent] = useState(0);
  // const [showOverlay, setShowOverlay] = useState(false);
  // const listLength = props.imageList.length;
  // console.log(listLength);

  // const nextImage = () => {
  //   {
  //     current === listLength - 1 ? setCurrent(0) : setCurrent((prev)=>(prev+1));
  //   }
  // };
  
  // const prevImage = () => {
  //   {
  //     current === 0 ? setCurrent(listLength - 1) : setCurrent(prev => prev-1);
  //   }
  // };

  // document.addEventListener('keydown', function(event){
  //   if(event.key === "ArrowLeft"){
  //     prevImage();
  //   }
  // });

  // document.addEventListener('keydown', function(event){
  //   if(event.key === "ArrowRight"){
  //     nextImage();
  //     console.log(current)

  //   }
  // });


  // const hadnleShopOverlay = () => {
  //   setShowOverlay((prev) => !prev); //to samo co w next i previous
  //   console.log(showOverlay)
  // };

  // document.addEventListener('keydown', function(event){
  //   if(event.key === "Escape"){
  //     setShowOverlay(false);
  //   }
  // });

  return (
    <>
      {props.showOverlay && (
        <ShopOverlay
          hadnleShopOverlay={props.hadnleShopOverlay}
          nextImage={props.nextImage}
          prevImage={props.prevImage}
          current={props.current}
          listLength={props.listLength}
          imageList={props.imageList}
        />
      )}
      <div onClick={props.hadnleShopOverlay} className={classes.wrapper}>
        <div className={classes.gallery}>
          <img src={props.imageList[props.current].image} />
        </div>
        <div className={classes.buttonsarea}>
        </div>
      </div>
    </>
  );
};

export default ShopGallery;



{/* <div className={classes.buttons}>
<button type="button" onClick={nextImage}>
  Next
</button>
<button type="button" onClick={prevImage}>
  Previous
</button>
</div> */}