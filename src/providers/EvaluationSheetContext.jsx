import { useState, useEffect, createContext } from "react";

export const EvaluationSheetContext = createContext({})

export const EvaluationSheetProvider = ({ children }) => {

    function contextWorks(){
        console.log("Funcionou")
    }

    return(
        <EvaluationSheetContext.Provider value={{contextWorks}}>
            {children}
        </EvaluationSheetContext.Provider>
    )

}