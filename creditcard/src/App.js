import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import Card from "./pages/Card"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </>
  )
}

export default App