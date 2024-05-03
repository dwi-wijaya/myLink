import { useUser } from '@/context/user';
import { useRouter } from 'next/router'

const WithUnprotected = (Pages) => {
    return (props) => {
        const router = useRouter();
        const user = useUser();
        const { uuid } = user;
        
        if (uuid) {
            router.replace('/');
            return <></>
        }
        return <Pages {...props} />
    }
}

export default WithUnprotected