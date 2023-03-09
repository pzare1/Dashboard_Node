import React, { useState, useContext, useReducer } from 'react';
const initialState = {
    
}
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, setstate] = useState(initialState);
    return(
        <>
            <AppContext.Provider value={{...state}}>
                {children}
            </AppContext.Provider>
        </>
    )
} 

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider,useAppContext}
