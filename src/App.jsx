import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Brands from "./components/Brands"
import WhatGPT3 from "./components/WhatGPT3"
import Features from "./components/Features"
import Possibility from "./components/Possibility"
import CTA from "./components/CTA"
import Blog from "./components/Blog"
import Footer from "./components/Footer"

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
      <Blog />
      <Footer />
    </div>
  )
}

export default App
