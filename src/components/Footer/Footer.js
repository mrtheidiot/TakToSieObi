import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

// Footer component, shown on the bottom of the page as a bar

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
        <Link to="/kontakt" ><i className="fas fa-envelope"></i></Link>
      </section>
    </footer>
  );
};

export default Footer;

