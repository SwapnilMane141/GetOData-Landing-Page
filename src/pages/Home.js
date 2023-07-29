import Footer from "./../components/Footer";
import { Fragment } from "react";
import SectionOne from "../components/homepage/SectionHomepage";
import SectionFeatures from "../components/homepage/SectionFeatures";
import FAQ from "../components/homepage/FAQ";
import SectionSignUp from "../components/homepage/SectionSignUp";
import { useEffect } from "react";
import WallOfLove from "../components/homepage/WallOfLove";

const Home = () => {
  return (
    <Fragment>
      <SectionOne />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="1440"
        // height="189"
        viewBox="0 0 1440 189"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-3 189V0.206373C152.173 27.9506 417.8 46.2406 719.424 46.2406C1021.8 46.2406 1287.99 27.8598 1443 0V189H1435.9C1279.94 161.845 1017.23 144.015 719.424 144.015C421.619 144.015 158.904 161.845 2.94627 189H-3Z"
          fill="url(#paint0_linear_853_51)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_853_51"
            x1="-3"
            y1="21.4773"
            x2="1347.63"
            y2="473.781"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </linearGradient>
        </defs>
      </svg>
      <SectionFeatures></SectionFeatures>
      <FAQ></FAQ>
      <WallOfLove></WallOfLove>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="1437"
        // height="246"
        viewBox="0 0 1437 246"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1437.5 0.417007C1437.5 57.2048 852.526 122.5 374 122.5C194.705 122.5 77.0431 113.333 0 98.882V245.999H5.86139C161.809 218.836 424.565 200.999 722.424 200.999C1020.28 200.999 1283.04 218.836 1438.99 245.999H1446V0.416504H1437.5V0.417007Z"
          fill="url(#paint0_linear_887_1533)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_887_1533"
            x1="-3.5615e-06"
            y1="28.3236"
            x2="1408.54"
            y2="391.341"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF9898" />
            <stop offset="1" stop-color="#8054FF" />
          </linearGradient>
        </defs>
      </svg> */}
      <SectionSignUp></SectionSignUp>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
