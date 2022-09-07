import { useEffect, useState } from 'react'
import request from '../utils/axios-utils'

export const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        // console.log(user.user.email)
        email &&
            request({ url: `/user/${email}`, method: 'put', data: currentUser })
                .then(data => {
                    localStorage.setItem('accessToken', data.token);
                    setToken(data.token);
                })
    }, [user])
    return token;
}