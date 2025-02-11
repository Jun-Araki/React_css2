import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Css modules</p>
      <button className={classes.button}>Better</button>
    </div>
  );
};
