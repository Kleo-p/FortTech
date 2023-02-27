import React from 'react';
import "./App.css";
// import Home from "./components/pages/Home";
// import Contact from "./components/pages/Contact";
// import About from "./components/pages/About";
// import Services from "./components/pages/Services";

import Footer from "./components/footer";
import One from "./components/sectionOne";
import Testimony from "./components/sectionTwo";
import SecSection from "./components/secondSec";

function App() {
  return (
    <div className="App">
      <One />
      <Testimony />
      <SecSection />
      <Footer />
      
    </div>
  );
}

export default App;
