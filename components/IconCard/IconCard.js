import classNames from "classnames";
import styles from "./IconCard.module.scss";

const IconCard = ({ icon, text }) => {
  return (
      <div className={classNames("col-lg-5", "col-12", styles.item)}>
        <span className={styles.icon}>{icon}</span>
        <p>{text}</p>
      </div>
  );
};

export default IconCard;
