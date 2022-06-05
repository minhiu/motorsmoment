import IconCard from "@components/IconCard/IconCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHandshake,
  faScrewdriver,
  faStore,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react/cjs/react.production.min";
import classNames from "classnames";
import styles from "./WhyUs.module.scss";

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className={classNames(
        "pattern-cross-dots-xl",
        "d-flex",
        "justify-content-center",
        "items-center",
        "background-dotty-black"
      )}
    >
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center m-auto pt-5 pb-5">
        <h1 className="mb-5 font-weight-bold">
          <Fragment>
            M<FontAwesomeIcon className="fa-spin" icon={faGear} size={"xs"} />
            TORS M
            <FontAwesomeIcon className="fa-spin" icon={faGear} size={"xs"} />
            MENT
          </Fragment>
        </h1>
        <h2 className="mb-5 font-weight-bold">WHY US</h2>
        <div className="row text-dark flex-wrap justify-content-center">
          <IconCard
            icon={<FontAwesomeIcon icon={faStore} />}
            text={
              "Motors Moment Marketplace (buy and sell scooters and scooter parts)"
            }
          />
          <IconCard
            icon={<FontAwesomeIcon icon={faScrewdriver} />}
            text={
              "Discount on scooter parts: members can get discounts from well known scooter websites"
            }
          />
          <IconCard
            icon={<FontAwesomeIcon icon={faWrench} />}
            text={
              "Discount on vespa trusted mechanics from around the world.  Members can go to a trusted mechanic recommended by MM"
            }
          />
          <IconCard
            icon={<FontAwesomeIcon icon={faHandshake} />}
            text={
              "Collab with other companies such as a helmet brand, Vespa brand, or any other scooter brand"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
