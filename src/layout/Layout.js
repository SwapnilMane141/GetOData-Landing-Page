import { Fragment } from "react";
import Header from "../components/Header";
import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <main classes={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
