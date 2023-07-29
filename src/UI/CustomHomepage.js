import classes from "./CustomHomepage.module.scss";
import Button from "./Button";

const CustomHomepage = (props) => {
  //   Setting styles and getting the custom background image
  const sectionStyles = {
    backgroundImage: `url(${props.backImg})`,
    height: props.height ? props.height : "70vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "2rem",
    color: "#fff",
    position: "relative",
  };

  return (
    <section style={sectionStyles} className={classes["section-homepage"]}>
      <div className={classes.heading}>
        <h1 className={classes.heading__primary}>{props.heading}</h1>
        <h3 className={classes.heading__secondary}>{props.description}</h3>
        {props.btnText && <Button text={props.btnText}></Button>}
      </div>
    </section>
  );
};

export default CustomHomepage;
