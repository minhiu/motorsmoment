import Image from "next/image";
import Header from "@components/Header/Header";
import Intro from "@components/Home/Intro";
import About from "@components/Home/About";
import Goals from "@components/Home/Goals";
import WhyUs from "@components/Home/WhyUs";
import Team from "@components/Home/Team";
import RoadMap from "@components/Home/RoadMap";
import Footer from "@components/Footer/Footer";

const Home = () => {
  return (
    <main className="position-relative">
      <Header />
      <Intro />
      <About />
      <Goals />
      <WhyUs />
      <Team />
      <RoadMap />
      <Footer color="#fff" />
    </main>
  );
};

export default Home;
