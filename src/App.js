import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Products from "./screens/Products";
import AboutUs from "./screens/AboutUs";
import Cart from "./screens/Cart";
import LandingPage from "./screens/LandingPage";

function App() {
  const { products } = useSelector((state) => state.productData);
  // console.log(products);
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
