import classNames from "classnames";
import Image from "next/image";
import styles from "./ProfileCard.module.scss";

const ProfileCard = ({ imgSrc, name, role }) => {
  return (
    <div
      className={classNames(
        "col-lg-3 col-md-6 col-12 mb-5"
      )}
    >
      <div className={classNames(styles.imgWrapper)}>
        <Image
          src="/images/logo-bw.png"
          width={200}
          height={200}
        />
      </div>
      <div className={classNames(styles.infoWrapper, "text-center")}>
        <h3 className="font-weight-bold">{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
