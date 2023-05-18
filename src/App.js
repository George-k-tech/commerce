import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./Pages/shop";
import { Footer } from "./components/footer";
import { Cart } from "./Pages/cart";
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
