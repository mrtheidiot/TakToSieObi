import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <section className={classes.text}>Tak to się Obi 2022</section>
      <section className={classes.icons}>
        <a
          href="https://www.facebook.com/ObiTraining"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          href="https://www.instagram.com/taktosieobi"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-instagram insta" />
        </a>
        <Link to="/kontakt" ><i class="fas fa-envelope"></i></Link>
      </section>
    </footer>
  );
};

export default Footer;

