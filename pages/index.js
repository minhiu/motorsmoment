import Head from "next/head";
import Image from "next/image";
import Header from "@components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react/cjs/react.production.min";

export default function Home() {
  return (
    <div className="container center-abs-div">
      <Head>
        <title>Motors Moment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/images/logo-bw.png"
          className="fade-in delay-1s"
          width={200}
          height={200}
        />
        <Header
          title={
            <Fragment>
              M{<FontAwesomeIcon icon={faGear} size="xs" />}TORS MOMENT
            </Fragment>
          }
          className="fade-in"
        />
        <p className="description fade-in delay-2s">Coming Soon</p>
      </main>
    </div>
  );
}
