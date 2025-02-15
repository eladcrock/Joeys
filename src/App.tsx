import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "./assets/components/Header/HeaderSimple";
import { FooterSimple } from "./assets/components/Footer/FooterSimple";
import { CardsCarousel } from "./assets/components/Carousel/CardsCarousel";
import { HeroTitle } from "./assets/components/HeroTitle/HeroTitle";
import { ImageActionBanner } from "./assets/components/ImageActionBanner/ImageActionBanner";
import { FeaturesAsymmetrical } from "./assets/components/Features/FeaturesAsummetrical";
import { HeroText } from "./assets/components/About/HeroText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




function App() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: Set global animation duration
      // Add other global options here
    });
  }, []);
  return (
    <MantineProvider>
      <HeaderSimple />

      <div id="home" >
        <HeroTitle />
      </div>
      < br />
      <br />
      {/* Container to wrap all content and ensure a column layout */}
      {/* Gallery*/}   
                                   
      <div id="gallery">
        <CardsCarousel />
      </div>
      <br />
      <br />
      {/* Services */}

      <div id="services">
        <FeaturesAsymmetrical />
        <br />
      </div>
      {/* Getting here*/}
      < br />
      <br />

      <div id="directions">
        <ImageActionBanner />
      </div>
      {/* about Section */}

      <div id="about">
        <br />
        <HeroText />
      </div>
      {/* ADD TESTIMONIAL Section */}
      {/* Footer Section */}
      <FooterSimple />
    </MantineProvider>
  );
}

export default App;
