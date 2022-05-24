import styles from "./Intro.module.scss";
import classNames from "classnames";
import Image from "next/image";

const Intro = () => {
  return (
    <section id="top" className={classNames("position-relative", styles.videoWrapper)}>
      <video className="w-fullscreen h-max-100vh" autoPlay={true} loop={true} muted={true}>
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
      <div className={classNames(styles.social)}>
        <a href="" target="_blank" rel="noreferrer">
          <Image src="/icons/opensea.svg" width={44} height={44} />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <Image src="/icons/discord.svg" width={44} height={44} />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <Image src="/icons/instagram.svg" width={44} height={44} />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <Image src="/icons/twitter.svg" width={44} height={44} />
        </a>
      </div>
    </section>
  );
};

export default Intro;
