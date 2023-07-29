import classes from "./EmailAccept.module.scss";
import useInput from "../hooks/use-input";
import { useState } from "react";
import { Oval } from "react-loader-spinner";

const EmailAccept = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const {
    value: emailEntered,
    isValid: emailValid,
    hasError: emailInputInvalid,
    valueChangeHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailValues,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const submitEmailHandler = async (event) => {
    event.preventDefault();

    if (!emailValid) {
      return;
    }

    setIsLoading(true);

    console.log("Submitted");
    console.log(emailEntered);

    // https://8vvxb46dk7.execute-api.us-east-1.amazonaws.com/Dev/getemails/earlyaccess

    const sendEmail = async (email) => {
      try {
        const response = await fetch(
          "https://8vvxb46dk7.execute-api.us-east-1.amazonaws.com/Dev/getemails/earlyaccess",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: emailEntered,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setIsLoading(false);
          // Process the successful response data
          setMessage("Thank You, We will reach out to you soon!");
          return data;
        } else {
          // Handle the error response
          setMessage("There was an error. Please try again!");
        }
      } catch (error) {
        console.log("Error: " + error);
        setMessage("There was an error. Please try again!");
        setIsLoading(false);
      }
    };

    sendEmail(emailEntered);
    resetEmailValues();
  };

  return (
    <div>
      {isLoading && (
        <Oval
          height={20}
          width={20}
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
      <div className={classes.subscribeBtn}>
        {!isLoading && !message && (
          <div className={classes.emailBox}>
            <input
              type="text"
              onChange={emailHandler}
              onBlur={emailBlurHandler}
              value={emailEntered}
              placeholder="Your email please"
              // onChange={workChangeHandler}
              className={
                emailInputInvalid
                  ? `${classes.subscribeEmail} ${classes.invalid}`
                  : classes.subscribeEmail
              }
            ></input>
            <button
              disabled={!emailValid}
              className={classes.subscribeBtn__Link}
              onClick={submitEmailHandler}
            >
              Subscribe for early access
            </button>
          </div>
        )}
        {message && (
          <h3
            className={
              message.includes("Thank")
                ? `${classes.thankYou}`
                : `${classes.tryAgain}`
            }
          >
            {message}
          </h3>
        )}
      </div>
    </div>
  );
};

export default EmailAccept;
