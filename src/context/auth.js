import { Authentication } from '@/services/firebase/config'
import { useEffect, useState } from 'react'
import { useUser, InitialUserState } from './user';

export  const AuthStateChangeProvicer = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const user = useUser();
    const {setUser} = user;

    const initiateAuthStateChange = () => {
        Authentication().onAuthStateChanged((user) => {
            if (user) {
                console.log("user authenticated");
                setUser({email: user.email, uuid: user.uid})
            } else {
                console.log("user not authenticated");
                setUser(InitialUserState)
            }
            setIsLoading(false)
        })
    }
    useEffect(() => {
        initiateAuthStateChange()
    }, [])

    if(isLoading){
        return <div className='flex justify-center items-center h-[100vh]'><i className=' text-subtext text-3xl bx bx-loader-alt bx-spin' ></i></div>
    }
    
    return children
}