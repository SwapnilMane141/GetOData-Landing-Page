import classes from "./SectionHomepage.module.scss";
import productShowcaseSrc from "./../../images/productShowcase.png";
// import EmailAccept from "../../UI/EmailAccept";
import BuyButton from "../../UI/BuyButton";


const SectionOne = (props) => {
  return (
    <section className={classes.section__homepage}>
      <div className={classes.headings}>
        <h1 className={classes.primaryHeading}>
          Extract Data from any Website with AI
        </h1>
        <h3 className={classes.secondaryHeading}>
          AI-powered Chrome extension for seamless website data extraction in
          multiple formats, and analytics.
        </h3>
        <div className={classes.emailInput}>
          {/* <EmailAccept></EmailAccept> */}
          <BuyButton></BuyButton>
        </div>
      </div>
      <div className={classes.productShowcase}>
        <img
          src={productShowcaseSrc}
          alt="Product Showcase"
          className={classes.productShowcaseImage}
        ></img>
      </div>
    </section>
  );
};

export default SectionOne;
