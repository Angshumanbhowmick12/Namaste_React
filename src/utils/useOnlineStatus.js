import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    //check if online 

    const[onlineStatus,setOnlineStatus]=useState(true)

    useEffect(()=>{
        window.addEventListener('online',()=>{
            setOnlineStatus(false);
        });

        window.addEventListener('offline',()=>{
            setOnlineStatus(true);
        })
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;