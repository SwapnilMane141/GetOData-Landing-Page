import classes from "./SectionSignUp.module.scss";
import BuyButton from "../../UI/BuyButton";
import GiftBoxSrc from "./../../images/giftBox.png";
import { useState, useEffect } from "react";

const SectionSignUp = (props) => {
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: "101",
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <section className={classes.sectionSignUp}>
      <div className={classes.lifetimeDealBox}>
        <img
          alt="GiftBox"
          src={GiftBoxSrc}
          className={classes.giftBoxImage}
        ></img>
        <h2 className={classes["signUpHeading"]}>Get your Lifetime Deal Now</h2>
        <h4 className={classes["secondaryHeading"]}>
          Pay Once, Use Forever. Hurry up, The Lifetime deals ends soon!
        </h4>
        <div className={classes.pricing}>$4.99</div>
        <div className={classes.EmailInput}>
          <BuyButton></BuyButton>
        </div>
      </div>
    </section>
  );
};

export default SectionSignUp;
