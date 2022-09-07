import { useEffect, useState } from "react"
import { request } from "../utils/axios-utils";


export const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        request({ url: `/admin/${user.email}`, method: 'get' })
            .then(data => {
                setAdmin(data.admin);
                setAdminLoading(false)
            })
    }, [user])

    return { admin, adminLoading };
}