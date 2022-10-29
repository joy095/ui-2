import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Delete_card from "./Delete_card";
import Edit_card from "./Edit_card";
import Upload from "./Upload";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/delete" element={<Delete_card />} />
        <Route path="/edit" element={<Edit_card />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
};

export default App;
