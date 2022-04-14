import Head from "next/head";
import Header from "@components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react/cjs/react.production.min";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Motors Moment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          title={
            <Fragment>
              M{<FontAwesomeIcon icon={faGear} size="xs" />}TORS MOMENT
            </Fragment>
          }
        />
        <p className="description">Coming Soon</p>
      </main>
    </div>
  );
}
