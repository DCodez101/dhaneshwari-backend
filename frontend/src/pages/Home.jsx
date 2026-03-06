import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Rooms from "../components/Rooms";
import Gallery from "../components/Gallery";
import Attractions from "../components/Attractions";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Rooms />
      <Gallery />
      <Attractions />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
