import AboutUs from "../components/Home/AboutUs"
import ChooseUs from "../components/Home/ChooseUs"
import ContactSection from "../components/Home/ContactSection"
import CtaSection from "../components/Home/CtaSection"
import FaqSection from "../components/Home/FaqSection"
import Gallery from "../components/Home/Gallery"
import Hero from "../components/Home/Hero"
import Location from "../components/Home/Location"
import Service from "../components/Home/Service"
import ServicePrice from "../components/Home/ServicePrice"
import Testimonials from "../components/Home/Testimonials"

const Home = () => {
  return (
    <>
    <Hero />
    <AboutUs />
    <Service />
    <ChooseUs />
    <Testimonials />
    <ServicePrice />
    <Gallery />
    <Location/>
    <FaqSection />
    <ContactSection />
    <CtaSection />
    </>
  )
}

export default Home