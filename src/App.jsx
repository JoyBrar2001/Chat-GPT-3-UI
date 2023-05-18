import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Brands from "./components/Brands"
import WhatGPT3 from "./components/WhatGPT3"
import Features from "./components/Features"
import Possibility from "./components/Possibility"
import CTA from "./components/CTA"

function App() {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
    </div>
  )
}

export default App
