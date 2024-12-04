import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";

function App() {
  return (
    <Router>
      <main className="bg-hero-pattern bg-cover bg-bottom text-white font-sans text-shadow-md">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharacterPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
