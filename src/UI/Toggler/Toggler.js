import classes from "./Toggler.module.css";

const Toggler = ({ onChange, current }) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={onChange} checked={current} />
      <span className={classes.slider} />
    </label>
  );
};

export default Toggler;
