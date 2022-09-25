import { Initial } from "./Pages/Home/Initial";
import { Profile } from "./Pages/Profile/Profile";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Initial />} />
        <Route exact path="/profile" element={<Profile />} /> 
    </Routes>
  );
}

export default App;
