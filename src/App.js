import Billing from "./components/Drone/Drone";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Model from "./components/ModelOverView/Model";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden bg-gradient-to-b bg-[#1d1c1c] text-white font-sans">
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-hero-pattern bg-hero-pattern bg-cover bg-no-repeat bg-center`}
    >
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <Model />
        <Contact />
        <FAQ />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
