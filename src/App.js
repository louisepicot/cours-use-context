import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import AppStyle from "./style/AppStyle";
import { useContext, useState } from "react";
import { userContext } from "./context/userContext";
import Private from "./pages/Private";
import PrivateHome from "./pages/PrivateHome";


function App() {


  const context = useContext(userContext)

  return (
    <AppStyle >
      <SignUpModal />
      <SignInModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route  path="/private" element={<Private />}> 
            <Route  path="/private/private-home" element={<PrivateHome />} /> 
        </Route>
      </Routes>
    </AppStyle>
  );
}

export default App;
