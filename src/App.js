// import logo from './logo.svg';
// import './assets/css/default.css';
// import './assets/css/main.css';
// import './assets/css/css.css';
// import './assets/css/dark.css'
import "./App.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { IconContext } from "react-icons";

import Intro from "./components/cv/Intro";
import Summary from "./components/cv/Summary";
import Expertise from "./components/cv/Expertise";
import Skills from "./components/cv/Skills";
import Experience from "./components/cv/Experience";
import Education from "./components/cv/Education";
import Portfolio from "./components/cv/Portfolio";
import Links from "./components/cv/Links";
import Contact from "./components/cv/Contact";

import { Button, ButtonGroup, Wrap } from "@chakra-ui/react";

import { IoBonfireSharp } from "react-icons/io5";

function App() {
  return (
    <ChakraProvider>
      <IconContext.Provider value={{ className: "icc" }}>
        <div className="app">
          <div class="app-cont c-main-container">
            <Intro />
            <Summary />

            <Expertise />
            <Skills />
            <Experience />
            <Portfolio />
            <Education />

            {/* <Links /> */}
            {/* <Contact /> */}
          </div>
        </div>
      </IconContext.Provider>
    </ChakraProvider>
  );
}

export default App;
