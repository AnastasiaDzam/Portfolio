import './styles/main.css'

import {BrowserRouter as Router, Routes, Route, HashRouter, HashRoutes,  } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Progects";
import Contacts from './pages/Contacts';
import Project from './pages/Project';

import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop/>
        <Navbar />
        <Route path= "/" element= {<Home />}/>
        <Route path= "/projects" element= {<Projects />}/>
        <Route path= "/contacts" element= {<Contacts />}/>
        <Route path= "/project/:id" element= {<Project />}/>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
