import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Layout from "./components/Layout";
import Home from "./screens/Home";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
