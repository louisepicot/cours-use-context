import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase-config"

export const userContext = createContext()


export const UserContextProviderComposant = (props) => {

  const signup = (email, pwd) => createUserWithEmailAndPassword(auth, email , pwd)

const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
   const clean =   onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser)
         }
     )
    return clean
  }, []);


 return <userContext.Provider value={{signup, currentUser}} >

           {props.children}
       </userContext.Provider>
 
}