import React from "react";
import Layout from "./components/layout/Layout";
import Shopping from "./containers/shopping/Shopping";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Layout>
          <p>Shopping</p>
          <Shopping />
        </Layout>
      </div>
    </div>
  );
}

export default App;
