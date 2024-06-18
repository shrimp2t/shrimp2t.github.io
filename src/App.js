// import logo from './logo.svg';
// import './assets/css/default.css';
// import './assets/css/main.css';
// import './assets/css/css.css';
// import './assets/css/dark.css'
import './App.scss';
import { ChakraProvider } from '@chakra-ui/react'
import { IconContext } from "react-icons";


import Intro from './components/cv/Intro';
import Summary from './components/cv/Summary';
import Expertise from './components/cv/Expertise';
import Skills from './components/cv/Skills';
import Experience from './components/cv/Experience';
import Education from './components/cv/Education';
import Portfolio from './components/cv/Portfolio';
import Links from './components/cv/Links';
import Contact from './components/cv/Contact';

import { Button, ButtonGroup, Wrap } from '@chakra-ui/react'


import { IoBonfireSharp } from "react-icons/io5";


function App() {
  return (
    <ChakraProvider>
      <IconContext.Provider value={{  className: "icc" }}>

        <div className="app">
          <div className='app-nav'>
            <div className='app-nav-inner'>
              <Intro />
              <Summary />
              <Wrap spacing={4} direction='row' align='center'>

                <Button leftIcon={<IoBonfireSharp/>} colorScheme='teal' variant='solid'>
                  Summary
                </Button>
                <Button colorScheme='teal' variant='solid'>
                  Expertise
                </Button>
                <Button leftIcon={IoBonfireSharp} colorScheme='teal' variant='solid'>
                  Skills
                </Button>
                <Button colorScheme='teal' variant='solid'>
                  Education
                </Button>
                <Button colorScheme='teal' variant='solid'>
                  Links
                </Button>
                <Button colorScheme='teal' variant='solid'>
                  Contact
                </Button>

              </Wrap>


            </div>

          </div>
          <div class="app-cont c-main-container">



            <Expertise />
            <Skills />
            <Experience />
            <Education />
            <Portfolio />
            <Links />
            <Contact />


          </div>

        </div>
      </IconContext.Provider>;
    </ChakraProvider>
  );
}

export default App;
