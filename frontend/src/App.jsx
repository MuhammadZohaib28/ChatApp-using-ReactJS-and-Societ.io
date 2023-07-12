import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import Chats from "./components/chats/Chats";
const App = () => {
  return (
    <>
      <div className="app">
        <Route path="/" component={Header} exact/>
        <Route path="/chats" component={Chats} />
      </div>
    </>
  );
};

export default App;
