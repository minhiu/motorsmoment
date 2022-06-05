import ProfileCard from "@components/ProfileCard/ProfileCard";
import classNames from "classnames";
import styles from "./Team.module.scss";

const Team = () => {
  return (
    <section
      id="team"
      className={classNames(
        "position-relative",
        "pattern-cross-dots-xl",
        "d-flex",
        "justify-content-center",
        "items-center",
        "background-dotty-black"
      )}
    >
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center text-dark m-auto pt-5 pb-5">
        <h2 className="mb-5 font-weight-bold">TEAM</h2>

        <div className="row">
          <ProfileCard name={"Hugh Pham"} role={"Software Engineer"} />
          <ProfileCard name={"Dang Nguyen"} role={"Graphic Designer"} />
          <ProfileCard name={"Minh Bao"} role={"Operations Manager"} />
          <ProfileCard name={"Anthony Pham"} role={"Project Manager"} />
        </div>
      </div>
    </section>
  );
};

export default Team;
