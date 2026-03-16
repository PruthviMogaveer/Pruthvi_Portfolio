import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Hero,
  Portfolio,
  Skills,
  AnimatedBackground,
} from "./components";
import Fade from "react-reveal/Fade";
import PWAPrompt from "./components/PWAPrompt";
import OfflineNotification from "./components/OfflineNotification";

function App() {
  return (
    <>
      <AnimatedBackground />
      <PWAPrompt />
      <OfflineNotification />
      <div className="w-full">
        <div className="w-full fixed md:top-0 max-md:bottom-0 max-md:bg-lightwhite bg-white dark:bg-secondary dark:max-md:bg-secondary max-md:rounded-t-xl max-md:shadow-menu dark:max-md:shadow-darkmenu z-50">
          <Fade top duration={1300}>
            <Header />
          </Fade>
        </div>
        <div className="relative w-full min-h-screen flex flex-col space-y-16 max-md:space-y-12">
          <section id="home" className="h-[36rem] scroll-mt-20">
            <Hero />
          </section>

          <section id="about" className="min-h-screen scroll-mt-20">
            <About />
          </section>

          <section id="experience" className="min-h-screen scroll-mt-20">
            <Experience />
          </section>

          <section id="education" className="min-h-screen scroll-mt-20">
            <Education />
          </section>

          <section id="skills" className="min-h-screen scroll-mt-20">
            <Skills />
          </section>

          <section id="portfolio" className="min-h-screen scroll-mt-20">
            <Portfolio />
          </section>
          <section id="contact-me" className="min-h-screen scroll-mt-20">
            <Fade left duration={1300}>
              <Contact />
            </Fade>
          </section>
        </div>
        <div id="footer" className="relative">
          <Fade bottom duration={1300}>
            <Footer />
          </Fade>
        </div>
      </div>
    </>
  );
}

export default App;
