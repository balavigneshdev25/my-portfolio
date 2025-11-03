import Navbar from "../components/navbar";
import HeroPage from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Resume from "../components/resume";
import Summary from "../components/summary";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="pt-16  flex flex-col bg-zinc-50 font-sans">
      <Navbar />
      <HeroPage/>
      <Summary/>
      <About/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}
