import classes from "./kontakt.module.css";
import './Kontakt.css';

const Kontakt = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.seg1}>
        <div className={classes.title}>Dane firmy:</div>
        <div>
          Animalevra Dorota Alewras
          <br></br>
          ul. Monte Cassino 36/7
          <br></br> 70-465 Szczecin
        </div>
        <div>Dane do przelewu:</div>
        <div>Animalevra Dorota Alewras</div>
        <div>
          ING BANK Śląski:
          <br></br>
          68 1050 1559 1000 0092 6329 1545
        </div>
      </div>
      <div className={classes.seg2}>
        <div className={classes.title}>Dane kontaktowe:</div>
        <div>
          Tel: 697 288 234
          <br></br>
          email: taktosieobi@gmail.com
          <br></br>
          <div className={classes.messenger}>
            <a
              href="https://m.me/ObiTrening"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-2x fa-facebook-messenger fejs"></i>{" "}
            </a>
            Messenger Me!
          </div>
        </div>
      </div>
      <div className={classes.seg3}>
        <div className={classes.socialwrapper}>
          <div className={classes.title}>Obserwuj nas tu:</div>
          <div className={classes.socialmedia}>
          <a
              href="https://facebook.com/ObiTraining"
              target="_blank"
              rel="noreferrer noopener"
            >
            <i className="fab fa-2x fa-facebook fejs"></i> </a>ObiTraining
            
          </div>
          <div className={classes.socialmedia}>
          <a
              href="https://www.instagram.com/taktosieobi"
              target="_blank"
              rel="noreferrer noopener"
            >
          
          <i className="fab fa-2x fa-instagram insta"></i></a> taktosieobi
          
          </div>
        </div>
        <div className={classes.socialwrapper}>
          <div className={classes.title}>Karma Husse:</div>
          <div className={classes.socialmedia}>
          <a
              href="https://www.facebook.com/AnimalevraHusse"
              target="_blank"
              rel="noreferrer noopener"
            >
            <i className="fab fa-2x fa-facebook fejs"></i></a> AnimalevraHusse
           
          </div>
          <div className={classes.socialmedia}>
          <a
              href="https://www.instagram.com/husse_szczecin"
              target="_blank"
              rel="noreferrer noopener"
            >
          <i class="fab fa-2x fa-instagram insta"></i></a> husse_szczecin
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
