import classNames from "classnames";
import Image from "next/image";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section
      id="about"
      className={classNames(
        "pattern-cross-dots-xl",
        "d-flex",
        "justify-content-center",
        "items-center",
        styles.bgIntro
      )}
    >
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center m-auto pt-5 pb-5 text-dark">
        <h1 className="mb-5 font-weight-bold">
          <Fragment>
            M<FontAwesomeIcon className="fa-spin" icon={faGear} size={"xs"} />
            TORS M<FontAwesomeIcon className="fa-spin" icon={faGear} size={"xs"} />
            MENT
          </Fragment>
        </h1>
        <h2 className="mb-3 font-weight-bold">ABOUT US</h2>

        {/* <Image src="/images/logo-bw.png" width={200} height={200} /> */}
        <div id="who-are-we">
          <p>
            We are big time vintage vespa and lambretta aficionados. Throughout
            the many years of enjoying the hobby in the vintage scooter
            community, we have recognized a special bond among the scooterists
            every time we have an opportunity to meet. Friendliness, enthusiasm,
            and pride cannot be matched or mistaken. These special moments can
            only be cherished forever. We, at Motors Moment have realized that
            and want to extend and connect all vintage scooter owners in every
            corner of the globe. We strongly believe that with the new
            blockchain technology and NFTs, we can build a strong virtual and
            physical community where everyone can be united.
          </p>
        </div>

        <div id="why-us">
          <p>
            Motors Moment is a collection of 10,000 digital art pieces of the
            iconic vintage vespa and lambretta scooters that live on the
            Ethereum network. 5000 vespa scooters and 5000 lambretta scooters.
            The rarity level will be divided into four categories: common,
            uncommon, epic, legendary. A Motors Moment NFT may serve as a
            digital ticket or asset to our club. Owning the NFT will make you an
            instant member of this worldwide vintage scooter club. By being a
            member, you will get exclusive access to many of our deals and
            benefits listed in the road map below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
