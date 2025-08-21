import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router>
      
      <div className="mx-auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}
