import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return <div className={classes.spinner} data-testid="loading-spinner"></div>;
}

export default LoadingSpinner;
