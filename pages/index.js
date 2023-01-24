import Head from "next/head";
// Components Start
import {
  Collaboration,
  Footer,
  Intro,
  Navbar,
  Particle,
  Portfolio,
  Skills,
  Testimonials,
} from "./components/Index.js";
// Components End
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Gopesh's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-transparent dark:bg-black">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Particle darkMode={darkMode} />
        <div className="px-10 md:px-20 lg:px-40 z-50">
          <Intro />
          <Skills />
          <Collaboration />
          <Testimonials />
          <Portfolio />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
