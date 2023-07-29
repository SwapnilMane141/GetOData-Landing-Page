import classes from "./BuyButton.module.scss";

const BuyButton = (props) => {
  return (
    <a
      className={classes.BuyButton}
      href="https://getodata.lemonsqueezy.com/checkout/buy/27785124-2dc0-489c-b367-1986864bd6e5"
      target="_blank"
      rel="noreferrer"
      //   onClick={submitEmailHandler}
    >
      Buy Now!
    </a>
  );
};

export default BuyButton;
