import { Authentication } from '@/services/firebase/config'
import { useEffect, useState } from 'react'
import { useUser, InitialUserState } from './user';
import getDocument from '@/services/firebase/crud/getDocument';

export  const AuthStateChangeProvicer = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const user = useUser();
    const {setUser} = user;

    const initiateAuthStateChange = async () => {
        Authentication().onAuthStateChanged( async(user) => {
            if (user) {
                console.log("user authenticated");
                const uid = user.uid
                const {result} = await getDocument('links', uid)
                setUser(result)
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