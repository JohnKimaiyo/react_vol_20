import React from "react";
import "./App.css";
import BookList from "./component/BookList";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
