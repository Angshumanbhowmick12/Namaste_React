import React, { useContext, useEffect } from 'react'
import RestroCard,{offersFood} from './RestroCard.jsx'

import { useState } from 'react'
import ShimmerUi from './ShimmerUi.jsx'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus.js'
import UserContext from '../utils/UserContext.js'



const Body=()=>{
 
    const [res,setRes] = useState([])

    const[searchText,setSearchText]=useState("")
    const[filterlist,setFilterlist]=useState([])

    const onlineStatus=useOnlineStatus()

    const ResturentOffer= offersFood(RestroCard)

    const {loggedIn,setUsername}=useContext(UserContext)

    console.log(res)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData= async()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )

        const Json=await data.json()

        console.log(Json)
        //optional Chaining
        setRes(Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterlist(Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //conditional rendering
    // if (res.length === 0) {
    //     return <ShimmerUi/>
    // }

    if(onlineStatus===false) return <h1>oops something went wrong check your internet connection</h1>

    return res.length === 0 ? (
    <ShimmerUi/>
    ) : (
        <div className="body">
            <div className="flex">
                <div className='m-4 p-4'>
                    <input type="text" 
                    className='border border-solid border-black rounded-md'
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                     />
                    <button className='px-4 py-2 bg-green-100 m-4 rounded-lg shadow-lg' onClick={()=>{
                            const filterRes=res.filter((e)=>
                                e.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )

                            setFilterlist(filterRes)
                    }}>
                        🔍
                    </button>
                </div>

                <div className='m-4 p-4 flex items-center'>
                <button className='px-4 py-2 bg-orange-100 rounded-lg shadow-lg '
                    onClick={()=>{
                        const filterList=res.filter((e)=>e.info.avgRating >4.5)
                        setFilterlist(filterList)
                    }}

                >TOP Rated Resturant</button>
                </div>
                <div className='mt-12'>
                  <label >UserName: </label>
                 <input className='p-2 border border-black'
                  value={loggedIn}
                  onChange={(e)=> setUsername(e.target.value)}
                 />
                </div>
        </div><div className ="flex flex-wrap" >
                    
                    {filterlist.map((rest) => (
                        <Link  to={'/resturant/' + rest.info.id} key={rest.info.id}>
                            {/* {rest.info.aggregatedDiscountInfoV3.length=== 0  ? <RestroCard resData={rest}/> : <ResturentOffer resData={rest}/>} */}

                            {<RestroCard resData={rest}/>}
                        </Link>

                    ))}

                    

            </div>

        </div>
    )
}

export default Body