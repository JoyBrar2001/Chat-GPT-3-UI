import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Brands from "./components/Brands"
import WhatGPT3 from "./components/WhatGPT3"

function App() {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatGPT3 />
    </div>
  )
}

export default App
