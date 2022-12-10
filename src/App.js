import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import MyNames from './component/MyNames'
import Myname from "./component/Myname";
import Mycount from "./component/Mycount";
import Form from "./component/Form";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <MyNames name="John Dev" />
      <MyNames name="John IT guy" />
      <MyNames name="John Software Engineer" />
      <Myname/>
      <Mycount/>
      <Form/>
    </div>
  );
}

export default App;
