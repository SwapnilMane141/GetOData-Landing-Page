import classes from "./Button.module.scss";

const Button = (props) => {
  const finalClasses = `${classes.btn} ${props.className} `;

  return <button className={finalClasses}>{props.text}</button>;
};

export default Button;
