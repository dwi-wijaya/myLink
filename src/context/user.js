import { useState, createContext, useContext } from "react";

export const InitialUserState = {
    email: null,
    uuid: null,
}

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = (props) => {
    const [userState, setUserState] = useState(InitialUserState)
    const setUser = (userCredentials) => {
        setUserState({ ...userCredentials });
    }

    const ResetUser = () => {
        setUserState(InitialUserState)
    }

    const value = { ...userState, setUser, ResetUser }

    return <UserContext.Provider value={value} {...props} />
}