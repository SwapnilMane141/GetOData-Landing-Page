import classes from "./WallOfLove.module.scss";
import { useEffect } from "react";

const WallOfLove = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://testimonial.to/js/iframeResizer.min.js";
    script.type = "text/javascript";
    script.async = true;

    const handleScriptLoad = () => {
      window.iFrameResize(
        { log: false, checkOrigin: false },
        "#testimonialto-getodata-tag-all-light"
      );
    };

    script.addEventListener("load", handleScriptLoad);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", handleScriptLoad);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={classes.wallOfLove}>
      <h2 className={classes["wallOfLoveHeading"]}>Our Wall of Love</h2>
      <iframe
        id="testimonialto-getodata-tag-all-light"
        title="Testimonial Widget"
        src="https://embed-v2.testimonial.to/w/getodata?theme=light&card=base&loadMore=on&initialCount=20&tag=all"
        frameBorder="0"
        scrolling="no"
        width="100%"
      ></iframe>
    </section>
  );
};

export default WallOfLove;
