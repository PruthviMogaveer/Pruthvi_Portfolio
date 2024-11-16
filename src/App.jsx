import {
  About,
  Contact,
  Education,
  Footer,
  Header,
  Hero,
  Portfolio,
  Skills,
} from "./components";
import Fade from "react-reveal/Fade";
import PWAPrompt from './components/PWAPrompt';
import OfflineNotification from './components/OfflineNotification';

function App() {
  return (
    <>
      <PWAPrompt />
      <OfflineNotification />
      <div className="w-full">
        <div className="w-full fixed md:top-0 max-md:bottom-0 max-md:bg-lightwhite bg-white dark:bg-secondary dark:max-md:bg-secondary max-md:rounded-t-xl max-md:shadow-menu dark:max-md:shadow-darkmenu z-10">
          <Fade top duration={1300}>
            <Header />
          </Fade>
        </div>
        <div className="relative w-full min-h-screen flex flex-col space-y-20">
          <section id="home" className="h-[36rem] ">
            <Hero />
          </section>

          <section id="about" className="h-full ">
            <About />
          </section>

          <section id="education" className="h-full">
            <Education />
          </section>

          <section id="skills" className="h-full">
            <Skills />
          </section>

          <section id="portfolio" className="">
            <Portfolio />
          </section>
          <section id="contact-me" className="">
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
