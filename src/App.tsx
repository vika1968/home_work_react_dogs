import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Breeds from "./views/Breeds";
import Page404 from "./views/Page404";
import Layout from "./components/Layout";
import OneBreed from "./views/OneBreed";
import OneImageOnly from "./views/OneImageOnly";
import Wiki from "./views/Wiki";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/:breedname" element={<OneBreed />} />
        <Route path="/:breedname/1" element={<OneImageOnly />} />
        <Route path="/wikisearch/:breed" element={<Wiki />} />
      </Route>
    </Routes>
  );
}

export default App;
