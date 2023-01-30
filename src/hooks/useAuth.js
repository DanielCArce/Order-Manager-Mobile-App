import { useContext, useState } from "react"
import { AuthContext } from './../contexts/AuthContext';

export default function useAuth(){
    const { state, dispatch, ACTIONS } = useContext(AuthContext);
    const { isAuth } = state;
    const logIn = (userToken) => {
        dispatch({ type: ACTIONS.SET_LOGIN, payload: true })
        dispatch({type:ACTIONS.SET_TOKEN, payload: userToken})
    }
    const logOut = (userToken) => {
        dispatch({ type: ACTIONS.SET_LOGIN, payload: false })
        dispatch({type:ACTIONS.SET_TOKEN, payload: userToken})
    }

    return {isAuth, logIn, logOut }
}