import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";


const App = () => {
  return (
    <main>
      <img src="/images/noise.png" alt="" className="noise"/>
      <Navbar/>
      <Hero/>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </main>
  );
}

export default App;
