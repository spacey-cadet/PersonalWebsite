import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills_XP";
import Testimonial from "@/components/Testimonials";
import Services from "@/components/Services"
import ContactForm from "@/components/ContactMe";

export default function Home() {
  return(
    <main>
      <HeroSection/>
      <Services/>
      <Projects/>
      <Testimonial/>
      <Skills/>
      <ContactForm/>
      <Footer/>
    </main>
  )

 
}
