import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./containers/home/Home";
import Shopping from "./containers/shopping/Shopping";
import Checkout from "./containers/checkout/Checkout";
import Page404 from "./containers/page404/Page404";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/store" exact element={<Shopping />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </div>
  );
}

export default App;
