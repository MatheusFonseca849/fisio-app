import { createContext } from "react";
import { useForm } from "react-hook-form";

export const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    function contextWorks(){
        console.log("Funcionou")
    }

    const evaluationFormRegister = useForm()
    const socioFormRegister = useForm()
    const jointHealthRegister = useForm()


    return(
        <FormContext.Provider value={{contextWorks, evaluationFormRegister, socioFormRegister, jointHealthRegister}}>
            {children}
        </FormContext.Provider>
    )

}