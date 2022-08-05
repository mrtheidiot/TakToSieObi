import classes from './ShopOverlay.module.css';

const ShopOverlay = (props) => {

    
    document.addEventListener('keydown', function(event){
        if(event.key === "ArrowLeft"){
          props.prevImage();
        }
      });
    
      document.addEventListener('keydown', function(event){
        if(event.key === "ArrowRight"){
          props.nextImage();
          console.log("cos");
        }
      });

    return (
        <>
        <div className={classes.wrapper}>
            <div onClick={()=>{props.nextImage()}} className={classes.button}><i class="fas fa-5x fa-chevron-left"></i></div>
            <div className={classes.image}>
                <img src={props.imageList[props.current].image} alt={props.imageList[props.current].alt} onClick={()=>{props.hadnleShopOverlay()}} />
            </div>
            <div type='button' onClick={()=>{props.prevImage()}} className={classes.button}><i class="fas fa-5x fa-chevron-right"></i></div>
        </div>
        {/* <button type='button' onClick={()=>{props.hadnleShopOverlay()}}>Close</button> */}
        </>
    )
} 

export default ShopOverlay