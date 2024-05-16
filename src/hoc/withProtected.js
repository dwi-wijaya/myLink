import { useUser } from '@/context/user';
import { useRouter } from 'next/router'
import React from 'react'

const WithProtected = (Pages) => {
    return (props) => {
        const router = useRouter();
        const user = useUser();
        const { uid } = user;

        if (!uid) {
            router.replace('/signin');
            return <></>
        }
        return <Pages {...props} />
    }
}

export default WithProtected