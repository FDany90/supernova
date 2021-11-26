import './App.css';

import { Header } from "./components/header";
// import { Service } from "./components/service";
import { About } from "./components/about";
// import { Analysis } from "./components/analysis";
import { Footer } from "./components/footer";
// import { Download } from "./components/download";
import { Projects } from "./components/projects";

function App() {
  return (
    <div className="App">
    <Header />      
    {/* <Service />       */}
    <About />      
    {/* <Analysis />       */}
    <Projects />      
    {/* <Download />       */}
    <Footer />      
    
    </div>
  );
}

export default App;
