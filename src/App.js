import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import BestSellersProducts from "./pages/BestSellersProducts";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestSellersProducts" element={<BestSellersProducts />} />
      </Routes>
    </div>
  );
}

export default App;
