import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import ScrollBtn from "./components/UI/ScrollBtn";
import About from "./components/intro/About";
import Skills from "./components/Skills";
import MoreAboutMe from "./components/intro/MoreAboutMe";
import Projects from "./components/intro/Projects";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faBars } from "@fortawesome/free-solid-svg-icons";
import Certificates from "./components/intro/Certificates";
import BottomNav from "./components/navbar/BottomNav";

library.add(fab, faCheckSquare, faBars);

function App() {
  return (
    <div className="App">
      <ScrollBtn />
      <Navbar />
      <BottomNav />
      <Intro />
      <About />
      <Skills />
      <Certificates />
      <MoreAboutMe />
      <Projects />
    </div>
  );
}

export default App;
