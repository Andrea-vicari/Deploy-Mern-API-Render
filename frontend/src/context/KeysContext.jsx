import { createContext, useReducer, useEffect } from "react";

export const KeysContext = createContext()

export const KeysContextProvider = () => {



    return(
        <KeysContext.Provider value={{...state, dispatch}}>
        {children}
        </KeysContext.Provider>
           )
}