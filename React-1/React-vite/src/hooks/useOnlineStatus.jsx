import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [status, setStatus] = useState(navigator.onLine)//Default Status

    useEffect(() => {
        addEventListener("online", () => {
            setStatus(true)
        })

        addEventListener("offline", () => {
            setStatus(false)
        })
    }, [status])


    return status
}

export default useOnlineStatus