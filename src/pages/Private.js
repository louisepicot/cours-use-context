import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userContext } from '../context/userContext'

export default function Private() {

   const {currentUser} = useContext(userContext)

    if(!currentUser) {
    return <Navigate to={"/"} />
    }

  return (
    <div>

      <Outlet />    

    </div>
  )
}
