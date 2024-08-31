import React, { useEffect } from 'react'
import RestroCard from './RestroCard.jsx'

import { useState } from 'react'
import ShimmerUi from './ShimmerUi.jsx'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus.js'


const Body=()=>{
 
    const [res,setRes] = useState([])

    const[searchText,setSearchText]=useState("")
    const[filterlist,setFilterlist]=useState([])

    const onlineStatus=useOnlineStatus()

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
            <div className="filter">
                <div className='search-box'>
                    <input type="text" 
                    className='search'
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                     />
                    <button onClick={()=>{
                            const filterRes=res.filter((e)=>
                                e.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )

                            setFilterlist(filterRes)
                    }}>
                        🔍
                    </button>
                </div>

                <button className='filter-btn'
                    onClick={()=>{
                        const filterList=res.filter((e)=>e.info.avgRating >4.5)
                        setFilterlist(filterList)
                    }}

                >Tap To Filter TOP Rated Resturant</button>
        </div><div className ="res-container" >
                    
                    {filterlist.map((rest) => (
                        <Link  to={'/resturant/' + rest.info.id} key={rest.info.id}>
                            <RestroCard  resData={rest} />
                        </Link>
                    ))}

                    

            </div>

        </div>
    )
}

export default Body