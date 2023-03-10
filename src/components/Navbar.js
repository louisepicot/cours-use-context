import React, {useContext} from 'react'
import {ModalContext} from "../context/modalContext"
import {Link, useNavigate} from "react-router-dom"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'

export default function Navbar() {



  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
    }
  }


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
        onClick={() => logOut()}
        className="btn btn-danger ms-2">
          Log Out
        </button>
      </div>
    </nav>
  )
}
