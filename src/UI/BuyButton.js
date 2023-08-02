import classes from "./BuyButton.module.scss";

const BuyButton = (props) => {
  return (
    <a
      className={classes.BuyButton}
      href="https://getodata.lemonsqueezy.com/checkout/buy/df91c8da-6393-4acc-b9d8-50e8ba7f2ae4"
      target="_blank"
      rel="noreferrer"
      //   onClick={submitEmailHandler}
    >
      Buy Now!
    </a>
  );
};

export default BuyButton;
