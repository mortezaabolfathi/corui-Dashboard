import "./scss/global.scss";
import React from 'react';
import HomeLayout from "./Layout/DefaultLayout";
import {DataDashboard, LightMode, TmpMode } from "./Components/index"
import{ Login, ProfileUser } from "./Pages/index";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" index  element={<Login/>} />
        <Route path="/dashboard" element={<HomeLayout/>}>
            <Route path="dataDashboard" element={<DataDashboard/>}/>
            <Route path="lightMode" element={<LightMode/>}/>
            <Route path="TmpMode" element={<TmpMode/>}/>
        </Route>
            <Route path="/portfolioUser" element={<ProfileUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
