import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import BestSellersProducts from "./pages/BestSellersProducts";
import NewProducts from "./pages/NewProducts";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import ProductDetails from "./components/Header/ProductDetails";
import Footer from "./components/Footer";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import OrderList from "./pages/Dashboard/OrderList";
import Review from "./pages/Dashboard/Review";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestSellersProducts" element={<BestSellersProducts />} />
        <Route path="/newproducts" element={<NewProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<OrderList />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
