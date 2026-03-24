import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import SpeciesList from "./pages/SpeciesList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especies" element={<SpeciesList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
