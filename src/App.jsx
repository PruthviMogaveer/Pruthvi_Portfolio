import { About, Education, Footer, Header, Hero, Skills } from "./components";

function App() {
  return (
    <div className="w-full">
      <div className="w-full fixed md:top-0 max-md:bottom-0 max-md:bg-lightwhite bg-white dark:bg-secondary dark:max-md:bg-secondary max-md:rounded-t-xl max-md:shadow-menu dark:max-md:shadow-darkmenu z-10">
        <Header />
      </div>
      <div className="relative w-full min-h-screen flex flex-col space-y-20">
        <section id="home" className="h-[36rem] ">
          <Hero />
        </section>
        <section id="about" className="h-full ">
          <About/>
        </section>
        <section id="education" className="h-full">
          <Education />
        </section>
        <section id="skills" className="h-full">
          <Skills />
        </section>
        <section id="portfolio" className="">
          fdk
        </section>
        <section id="contact-me" className="">
          fdk
        </section>
      </div>
      <div id="footer" className="relative">
        <Footer />
      </div>
    </div>
  );
}

export default App;
