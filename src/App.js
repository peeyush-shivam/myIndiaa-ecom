import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";

const Homepage = lazy(() => import("./screens/Homepage"));
const Cart = lazy(() => import("./screens/Cart"));
const LandingPage = lazy(() => import("./screens/LandingPage"));
const Wishlist = lazy(() => import("./screens/Wishlist"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Suspense fallback={<ProgressSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />}>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/products/:category"
                element={
                  <NotFound
                    title="404 Not Found"
                    message="The page you are looking for is under construction."
                    action="Back to Homepage"
                  />
                }
              />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/aboutus"
                element={
                  <NotFound
                    title="404 Not Found"
                    message="The page you are looking for is under construction."
                    action="Back to Homepage"
                  />
                }
              />
              <Route
                path="/account"
                element={
                  <NotFound
                    title="404 Not Found"
                    message="The page you are looking for is under construction."
                    action="Back to Homepage"
                  />
                }
              />
              <Route
                path="/checkout"
                element={
                  <NotFound
                    title="404 Not Found"
                    message="The page you are looking for is under construction."
                    action="Back to Homepage"
                  />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
