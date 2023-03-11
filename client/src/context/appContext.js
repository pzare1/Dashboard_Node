import React, { useState, useContext, useReducer } from 'react';
import reducer from './reducers';
const initialState = {
    user: null,
    token: null
}
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);
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
