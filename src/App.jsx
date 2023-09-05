// modules
import { Route, Routes } from "react-router-dom";

// pages
import Homepage from './pages/Homepage';
import Projectpage from './pages/Projectpage';
import Skillspage from './pages/Skillspage';

// components


function App() {

  return (
    <div className="w-screen">
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project/:id" element={<Projectpage />} />
          <Route path="/skills" element={<Skillspage />} />
      </Routes>
    </div>
  )
}

export default App