import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../src/components/ContactForm";
import EngagementModel from "../src/components/EngagmentModel";
import FindUs from "../src/components/FindUs";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Technologies from "../src/components/Technologies";
import Testimonials from "../src/components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 250, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <EngagementModel />
      <Technologies />
      <Testimonials />
      <FindUs />
      <ContactForm info="Project description our motive is to bring your ideas to life! Avento solutions is here to help you get your work done as quickly as possible."/>
    </div>
  );
}
