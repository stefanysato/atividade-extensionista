import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"

import './index.css'

import Home from "./pages/Home"
import About from "./pages/About"
import Quiz from "./pages/quiz"
import QuizResult from "./pages/QuizResult"
import SpeciesList from "./pages/SpeciesList"
import SpeciesDetail from "./pages/SpeciesDetail"
import UserProfile from "./pages/UserProfile"
import NavBar from "./components/NavBar"

function AppLayout() {
  const contentRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app-container">
      <div className="app-content" ref={contentRef}>

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
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
