import React, { useEffect } from "react";
import "./styles/App.css";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import { add_card, receive_cards } from "./actions/cards";
import { connect } from "react-redux";
import cards from "./data.json";
function App(props: any) {
  useEffect(() => {
    props.dispatch(receive_cards(cards));
    console.log(props);
  }, []);
  console.log(props);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
function mapStateToProps(state: {}) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(App);
