import React from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import { Nav } from "./Navigation/Nav";
import './Styles/General.css'
import './Styles/Variables.css'
import { Api, ApiProvider } from "./API/Api";
import Home from "./Pages/HomePages/Home";
import { useMediaQuery } from "react-responsive";



function App() {

  return (
    <>
    <ApiProvider>
    <Router>
      <Nav/>
      <div className="mainPages">
      <Routes>
        <Route path = {'/'} element={<Home/>}/>
      </Routes>
      </div>
    </Router>
    </ApiProvider>

    </>
  );
}

export default App;
