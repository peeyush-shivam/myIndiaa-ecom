import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Products from "./screens/Products";
import AboutUs from "./screens/AboutUs";
import Cart from "./screens/Cart";

function App() {
  const { products } = useSelector((state) => state.productData);
  console.log(products);
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<AboutUs />} />
          <Route path="/" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
