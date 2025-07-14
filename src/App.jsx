import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Cocktails from "./components/Cocktails/Cocktails"


const App = () => {
  return (
    <main>
      <img  className="noise" src="/images/noise.png" alt=""/>
      <Navbar/>
      <Hero/>
      <Cocktails/>
    </main>
  );
}

export default App;
