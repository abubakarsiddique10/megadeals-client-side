import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import BestSellersProducts from "./pages/BestSellersProducts";
import NewProducts from "./pages/NewProducts";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestSellersProducts" element={<BestSellersProducts />} />
        <Route path="/feature" element={<NewProducts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
