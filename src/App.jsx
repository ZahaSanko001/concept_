import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Cocktails from "./components/Cocktails/Cocktails"


const App = () => {
  return (
    <main>
      <img src="/images/noise.png" alt="" className="noise"/>
      <Navbar/>
      <Hero/>
      <Cocktails/>
    </main>
  );
}

export default App;
