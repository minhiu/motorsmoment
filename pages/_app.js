import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "@styles/globals.scss";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/router";

const Application = ({ Component, pageProps }) => {
  const router = useRouter(),
    [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));

    return () => {
      router.events.off("routeChangeStart", async () => setLoading(false));
      router.events.off("routeChangeComplete", async () => setLoading(false));
    };
  }, [router.events]);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader loading={loading} color={"#035397"} size={150} />
        </div>
      ) : (
        <React.Fragment>
          <Head>
            {/* <link rel="icon" href="/favicon.ico" /> */}
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossOrigin="anonymous"
            />
            <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;400;700&display=swap"
              rel="stylesheet"
            />
            <title>Motors Moment</title>
          </Head>
          <Component {...pageProps} />
        </React.Fragment>
      )}
    </>
  );
};

export default Application;
