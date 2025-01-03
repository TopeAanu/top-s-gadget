import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import gadgetImage from "../../assets/applegadgets.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Afro’s Gadgets</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={gadgetImage} alt="Gadgets" />
      </div>
    </Fragment>
  );
};

export default Header;
