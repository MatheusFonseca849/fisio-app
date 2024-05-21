import { yupResolver } from "@hookform/resolvers/yup";
import { createContext } from "react";
import { useForm } from "react-hook-form";
import { evaluationSheetSchema, jointHealthSchema, socioFormSchema } from "../schemas/patientFormSchemas";

export const FormContext = createContext({})

export const FormProvider = ({ children }) => {



    const evaluationSheetContext = useForm({
        resolver: yupResolver(evaluationSheetSchema)
    })
    
    const sociodemoSheetContext = useForm({
        resolver: yupResolver(socioFormSchema)
    })

    const jointhealthSheetContext = useForm({
        resolver: yupResolver(jointHealthSchema)
    })

    return(
        <FormContext.Provider value={{ evaluationSheetContext, sociodemoSheetContext, jointhealthSheetContext }}>
            {children}
        </FormContext.Provider>
    )

}