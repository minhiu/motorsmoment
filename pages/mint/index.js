import Header from "@components/Header/Header";
import IframeResizer from "iframe-resizer-react";

const Mint = () => {
  return (
    <section id="mint" className="position-fixed h-max-100vh w-full">
      <Header />
      <IframeResizer
        src="https://opensea.io/collection/motors-moment?embed=true"
        style={{ width: "100%", height: "100%" }}
        scrolling={true}
      />
    </section>
  );
};

export default Mint;
