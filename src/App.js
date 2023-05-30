import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./Pages/Shop";
import { Footer } from "./components/Footer";
import PageNotFound from "./Pages/PageNotFound";
import ProductDetails from "./Pages/[slug]";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/product/:slug" element={<ProductDetails/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
