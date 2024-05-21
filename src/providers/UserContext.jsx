import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const [ isLogged, setIsLogged ] = useState()

    const mockUser = {
        login: "teste@gmail.com",
        senha: "Aa1!12345"
    }
    
    const loginUser = (data) => {
        console.log(data)
        if(data.login == mockUser.login && data.senha == mockUser.senha){
            alert("Login realizado com sucesso")
            Navigate("/fichaAvaliacao")
        }else{
            console.log("failed to login")
        }

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

