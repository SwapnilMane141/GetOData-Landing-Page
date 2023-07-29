import "./Newsletter.css";

const Newsletter = (props) => {
  return (
    <div className="section-newsletter">
      <div className="newsletter">
        <div className="newsletter__start">
          <span className="newsletter__emoji">📪</span>
          <div className="newsletter__text">The Newsletter</div>
        </div>
        <div className="newsletter__form" id="form">
          <form
            method="post"
            action="mailer-subscriptions/mailer-subscription-css.php"
            className="email-form"
          >
            <input
              type="email"
              className="email-form__input"
              placeholder="Email Address"
              id="email"
              name="email"
              required
            />
            <label htmlFor="email" className="email-form__label" />
            <button className="email-form__button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
