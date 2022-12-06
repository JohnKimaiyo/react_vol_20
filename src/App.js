import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import MyNames from './component/MyNames'
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <MyNames name="John Dev" />
      <MyNames name="John IT guy" />
      <MyNames name="John Software Engineer" />
    </div>
  );
}

export default App;
