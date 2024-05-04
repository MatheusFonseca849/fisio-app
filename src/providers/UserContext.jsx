import { createContext } from "react";
import { useForm } from "react-hook-form";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const loginUser = (data) => {
        console.log(data)
      }

    const registerUser = (data) => {
        console.log(data)
    }

    return(
        <UserContext.Provider value={{loginUser, registerUser}}>
            {children}
        </UserContext.Provider>
    )
}

