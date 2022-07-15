import BestSellersProducts from "../pages/BestSellersProducts";
import NewProducts from "../pages/NewProducts";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ProductDetails from "../components/Header/ProductDetails";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import OrderList from "../pages/Dashboard/OrderList";
import Review from "../pages/Dashboard/Review";
import About from "../pages/About/About";
import Authentication from "../pages/Authentication/Authentication";
import ProceedCheckout from "../pages/ProceedCheckout";

export const publicRoutes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/signIn", name: "SignIn", Component: SignIn },
    { path: "/signUp", name: "SignUp", Component: SignUp },
    { path: "/bestSellersProducts", name: "BestSellersProducts", Component: BestSellersProducts },
    { path: "/newproducts", name: "Newproducts", Component: NewProducts },
    { path: "/productDetails/:id", name: "ProductDetails", Component: ProductDetails },
    { path: "/proceed", name: "Proceed", Component: ProceedCheckout }
]
