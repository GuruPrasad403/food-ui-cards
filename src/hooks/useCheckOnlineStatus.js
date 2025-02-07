import { useEffect, useState } from "react";

export default function useCheckOnlineStatus(){
    const [online,setOnline] = useState(true)

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnline(false)
        })
        window.addEventListener("online", ()=>{
            setOnline(true)
        })
    }, [])
    return online
}