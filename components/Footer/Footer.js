import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./Footer.module.css";

const Footer = ({ color }) => {
  return (
    <footer className={styles.footer} style={{color: color}}>
      <Fragment>
        © 2022 M
        <FontAwesomeIcon icon={faGear} size={"xs"} />
        TORS M<FontAwesomeIcon icon={faGear} size={"xs"} />
        MENT
      </Fragment>
    </footer>
  );
};

export default Footer;
