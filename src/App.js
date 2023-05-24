import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./Pages/Shop";
import { Footer } from "./components/Footer";
import { Cart } from "./Pages/Cart";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
