import Link from "next/link";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { Fragment } from "react/cjs/react.production.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={classNames("bg-black", "bg-opacity-75", styles.header)}>
      <a className="nav-link">
        <Link href="/home">
          <Fragment>
            M<FontAwesomeIcon icon={faGear} size={"xs"} />
            TORS M<FontAwesomeIcon icon={faGear} size={"xs"} />
            MENT
          </Fragment>
        </Link>
      </a>
      <ul
        className={classNames(
          "nav",
          "navbar",
          "justify-content-center",
          "mx-auto",
          styles.navbar
        )}
      >
        <li className="nav-item">
          <Link href="/#home">
            <a className="nav-link">HOME</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/mint">
            <a className="nav-link">MINT</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/gallery">
            <a className="nav-link">GALLERY</a>
          </Link>
        </li>
      </ul>
      <div style={{width: 171.35}}></div>
    </div>
  );
};

export default Header;
