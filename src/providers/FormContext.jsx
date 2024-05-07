import { createContext } from "react";
import * as yup from "yup"


export const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    function contextWorks(){
        console.log("Funcionou")
    }

    return(
        <FormContext.Provider value={{ contextWorks }}>
            {children}
        </FormContext.Provider>
    )

}