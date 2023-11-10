import React from "react";
import { AppDecorator } from "./AppDecorator";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ToDo from "./pages/ToDo";

export default function App() {
  return AppDecorator({})(function _App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </div>
    );
  });
}
