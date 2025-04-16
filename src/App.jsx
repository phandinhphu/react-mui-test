import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { Home } from "./pages/Home";
import Search from "./pages/Search";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
