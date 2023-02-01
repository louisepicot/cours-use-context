import React, {useContext} from 'react'
import {ModalContext} from "../context/modalContext"
import {Link} from "react-router-dom"

export default function Navbar() {

  const {toggleModals} = useContext(ModalContext)

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthJS 
      </Link>

      <div>
        <button 
        onClick={() => toggleModals("signUp")}
        className="btn btn-primary">
          Sign Up
        </button>
        <button 
          onClick={() => toggleModals("signIn")}
        className="btn btn-primary ms-2">
          Sign In
        </button>
        <button 
        className="btn btn-danger ms-2">
          Log Out
        </button>
      </div>
    </nav>
  )
}
