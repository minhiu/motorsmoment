import classNames from "classnames";
import { ScrollPercentage } from "react-scroll-percentage";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Goals.module.scss";

const Goals = () => {
  const [percentage, setPercentage] = useState(0);
  const renderGoal = () => {
    if (percentage === 0) {
      return <p>Scrool down slowly to progress</p>;
    }
    if (percentage < 20) {
      return (
        <p>
          10%: Pay operational and business fees. The rest will be reinvested
          into various advertisement platforms to further promote the brand and
          engage the community.
        </p>
      );
    } else if (percentage < 40) {
      return (
        <p>
          20%: Be at local rally events in CA to give out refreshment vouchers
          for our Epic and Legendary NFT holders.
        </p>
      );
    } else if (percentage < 60) {
      return (
        <p>
          40%: Give Legendary members an exclusive rally-pack at our organized
          Motors Moment rally events in OC. (Rally-pack contains a merch, a
          refreshment voucher, and an event raffle ticket)
        </p>
      );
    } else if (percentage < 80) {
      return (
        <p>
          60%: Allow Epic and Legendary members to make passive incomes from
          royalties by minting their real vespa pictures to NFTs.
        </p>
      );
    } else {
      return (
        <p>
          100%: Work on opening the first physical, vintage garage theme Motors
          Moment cafe/restaurant in CA. The site will serve as a pit stop
          catering to scooter and motorcycle riders. All NFT holders will get an
          exclusive discount.
        </p>
      );
    }
  };
  return (
    <section
      className={classNames(
        "position-relative",
        "pattern-zigzag-lg",
        "d-flex",
        "justify-content-center",
        "items-center",
        styles.bgIntro
      )}
    >
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center m-auto pt-5">
        <div className={styles.progressBar}>
          <div className={styles.wrapper}>
            <h2 className="mb-3 font-weight-bold text-light">OUR GOALS</h2>
            <p className="text-light">
              These iconic scooters have been around for almost 80 years and are
              still going strong. They are not going anywhere anytime soon and
              so are we. We are in it for the long haul. Our minting process is
              simple. No special whitelist or pre-sale. We will make it fair and
              simple. Everyone is getting it at the same price. After these
              certain percentages of NFTs are minted, we will be able to:
            </p>
            <div className={classNames(styles.scrollContainer)}>
              <svg
                className="scroll-progress"
                width="90"
                height="90"
                viewport="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className={styles.cirlceBg}
                  r="42"
                  cx="45"
                  cy="45"
                  fill="transparent"
                  strokeDasharray="264"
                  strokeDashoffset="0"
                />
                <circle
                  className={classNames(styles.circleProgress, "progress")}
                  r="42"
                  cx="45"
                  cy="45"
                  fill="transparent"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (percentage / 100) * 264}
                />
              </svg>
            </div>
            <div className="mt-5 text-light">{renderGoal()}</div>
          </div>
          <ScrollPercentage
            as="div"
            onChange={(percentage, entry) =>
              setPercentage(parseInt(percentage.toPrecision(2) * 100))
            }
          />
        </div>
      </div>
      <div className="position-absolute start-50 translate-middle bottom-0">
        <Image src="/images/logo-bw.png" width={400} height={400} />
      </div>
    </section>
  );
};

export default Goals;
