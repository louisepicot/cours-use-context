import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./composants/Navbar";
import SignInModal from "./composants/SignInModal";
import SignUpModal from "./composants/SignUpModal";
import Home from "./pages/Home";



function App() {


  return (
    <div  className="App">

    
      <Navbar   />
      <SignUpModal  />
      <SignInModal  />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
