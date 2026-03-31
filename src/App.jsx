import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import Home from "./pages/Home"
import About from "./pages/About"
import Quiz from "./pages/quiz"
import QuizResult from "./pages/QuizResult"
import SpeciesList from "./pages/SpeciesList"
import SpeciesDetail from "./pages/SpeciesDetail"
import UserProfile from "./pages/UserProfile"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="app-content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/result" element={<QuizResult />} />
            <Route path="/especies" element={<SpeciesList />} />
            <Route path="/especies/:id" element={<SpeciesDetail />} />
            <Route path="/perfil" element={<UserProfile />} />
          </Routes>

        </div>

        <NavBar />
      </div>
    </BrowserRouter>
  )
}

export default App
