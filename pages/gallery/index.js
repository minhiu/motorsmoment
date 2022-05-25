const { default: Footer } = require("@components/Footer/Footer");
const { default: Header } = require("@components/Header/Header");

const Gallery = () => {
  return (
    <section id="gallery">
      <Header />
      <div className="d-flex h-100vh justify-content-center items-center align-items-center">
        <h2 className="fade-in">Coming Soon</h2>
      </div>
      <Footer color="#000" />
    </section>
  );
};

export default Gallery;
