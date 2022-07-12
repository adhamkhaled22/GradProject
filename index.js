import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Login from "./Login";
import Survey from "./Survey";
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./Home";
import Signup from "./Signup";
import Admission from "./Admission"
import Discharge from "./Discharge"
import ESI from "./ESI"
import SurveyApp from "./SurveyApp"
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="Survey" element={<Survey />} />
      <Route path="Home" element={<Home/>} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Admission" element={<Admission />}/>
      <Route path="Discharge" element={<Discharge />}/>
      <Route path="ESI" element={<ESI />} />
      <Route path="SurveyApp" element={<SurveyApp />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
