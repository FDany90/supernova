import "./App.css";

import { Header } from "./components/header";
import { Service } from "./components/service";
import { About } from "./components/about";
import { Analysis } from "./components/analysis";
import { Footer } from "./components/footer";
import { Download } from "./components/download";
import { Projects } from "./components/projects";

import Supernova from "./components/videos/supernova.mp4";

function App() {
  return (
    <div className="App">
      {/* <video id="background-video" autoPlay loop muted>
        <source src={Supernova} type="video/mp4" />
      </video> */}
      <Header />
      {/* <Service /> */}
      <About />
      <About />
      <Analysis />
      <Analysis />
      <Projects />

      {/* <Download /> */}
      <Footer />
    </div>
  );
}

export default App;
