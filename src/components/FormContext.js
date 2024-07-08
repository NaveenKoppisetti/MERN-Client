import { createContext, useState } from "react";
import React from 'react'

const FormContext = createContext();

export const FormProvider = ({childComponent})=>{
    const [localDB,setDB] = useState([])
    return(
        <FormContext.Provider value = {{localDB,setDB}}>
            {childComponent}
        </FormContext.Provider>
    )
}


