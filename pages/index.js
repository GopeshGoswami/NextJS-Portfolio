import Head from "next/head";
// Components Start
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Collaboration from "./components/Collaboration";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
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

      <main className=" bg-white dark:bg-black">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <div className="px-10 md:px-20 lg:px-40">
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
