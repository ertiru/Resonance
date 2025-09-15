import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechSpecs from "./pages/TechSpecs";
import Compare from "./pages/Compare";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TechSpecs" element={<TechSpecs />} />
          <Route path="/Compare" element={<Compare />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
