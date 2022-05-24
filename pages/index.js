import Image from "next/image";
import Header from "@components/Header/Header";
import Intro from "@components/Home/Intro";
import About from "@components/Home/About";
import Goals from "@components/Home/Goals";
import WhyUs from "@components/Home/WhyUs";
import Team from "@components/Home/Team";

const Home = () => {
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Goals />
      <WhyUs />
      <Team />
    </main>
  );
};

export default Home;
