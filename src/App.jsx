import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Name from "@/components/common/Name";
import Home from "@/components/sections/Home";
import Navbar from "@/components/common/Navbar";
import Work from "@/components/sections/Work";
// import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import MovingText from "./components/common/MovingText";

const App = () => {
  const [showHome, setShowHome] = useState(false);

  return (
    <div className="min-h-screen w-screen  bg-zinc-950 text-white">
      {!showHome ? (
      <Name onFinish={() => setShowHome(true)} />
      ) : (
      <div className="min-h-screen bg-zinc-950 text-white">
        <Navbar />
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
      )
     }
     {/* <Navbar /> */}
     {/* <Home/> */}
     {/* <About/> */}
     {/* <Work/> */}
     {/* <Contact/> */}
    </div>
  );
};

export default App;
