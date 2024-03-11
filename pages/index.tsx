import { FeatureBlocks } from "../src/sections/FeatureBlocks";
import { Footer } from "../src/sections/Footer";
import { Header } from "../src/sections/Header";
import { Hero } from "../src/sections/Hero";
import { Contact } from "../src/sections/Contact";
import { Team } from "../src/sections/Team";
import { AboutUs } from "../src/sections/AboutUs";


const Home = ({
  isDarkMode, 
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;

}) => {
  return (
    <div className="overflow-hidden col text-strong">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <AboutUs/>
        <FeatureBlocks />
        {/* <Team /> */}
        <Contact isDarkMode={isDarkMode}/>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home; 
