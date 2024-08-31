import { useEffect, useState } from "react";
import { Menu_Api } from "./constant";

const useRestroMenu=(resid)=>{

    const [resDetail,setResDetail]=useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async()=>{
        const data=await fetch(Menu_Api + resid)
        const json=await data.json()

        setResDetail(json.data)
    }
    

    return resDetail;
}

export default useRestroMenu;