import React, { useState, useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";

const url = 'https://mission-5-f1624-default-rtdb.asia-southeast1.firebasedatabase.app/details.json'

const initialState = {
    registration: "",
    parked: "",
    dob: "",
    license: "",
    first_name: "",
    surname: "",
    address: "",
    phone: "",
    email: "",
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleRegistration = (e) => {
        dispatch({
            type: "REGISTRATION",
            value: e.target.value
        })
    };

    const handleParked = (e) => {
        dispatch({
            type: "PARKED",
            value: e.target.value
        })
    };

    const handleBirthday = (e) => {
        dispatch({
            type: "DATE_OF_BIRTH",
            value: e.target.value
        })
    };

    const handleFirstName = (e) => {
        dispatch({
            type: "FIRST_NAME",
            value: e.target.value
        })
    };

    const handleSurname = (e) => {
        dispatch({
            type: "SURNAME",
            value: e.target.value
        })
    };

    const handleAddress = (e) => {
        dispatch({
            type: "ADDRESS", 
            value: e.target.value
        })
    };
    
    const handlePhone = (e) => {
        dispatch({
            type: "PHONE", 
            value: e.target.value
        })
    };

    const handleEmail = (e) => {
        dispatch({
            type: "EMAIL", 
            value: e.target.value
        })
    };



    return (
        <AppContext.Provider
            value={{
                ...state,
                handleRegistration,
                handleParked,
                handleBirthday,
                handleFirstName,
                handleSurname,
                handleAddress,
                handlePhone,
                handleEmail
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }