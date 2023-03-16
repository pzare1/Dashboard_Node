import React, { useState, useContext, useReducer } from 'react';
import reducer from './reducers';
import axios from 'axios'
import { REGISTER_USER_BEGIN, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from './actions';
const initialState = {
    user: null,
    token: null
}
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    const registerUser = async (currentUser) => {
        dispatch({type:REGISTER_USER_BEGIN})
        try {
            const response = await axios.post('/api/v1/auth/register',currentUser)
            console.log(response)
            const {user,token} = response.data
            dispatch({
                type:REGISTER_USER_SUCCESS,
                payload:{
                    user,token
                }
            })
        } catch (error) {
            console.log(error.response)
            dispatch({
                type:REGISTER_USER_ERROR,
                payload:{
                    msg:error.response.data.msg
                }
            })
        }
    } 
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
