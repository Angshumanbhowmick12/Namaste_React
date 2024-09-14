
import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {

    const cartItems=useSelector(store=>store.cart.items)

    const {loggedIn}=useContext(UserContext)

    const onlineStatus=useOnlineStatus()

    const [btnname, setBtnname] = useState('LogIn')
  return (
    <div className=" flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-36"  alt="app-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"/>
            </div>

            <div className="flex items-center">
                <ul className='flex p-4 m-4 '>
                    <li className='px-4'>Online Status {onlineStatus ? '✅':'🔴'}</li>
                    <li className='px-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className='px-4 bg-white p-4 m-1 shadow-lg rounded-lg'>
                        <Link to='/cart' >🛒 {cartItems.length}</Link>
                    </li>
                    <button className='bg-blue-100 shadow-lg sm:px-4 lg:px-4 py-2  rounded-md' onClick={()=>{
                     btnname==='LogIn' ?   
                     setBtnname('LogOut')
                     :
                     setBtnname('LogIn')
                    }}>{btnname}</button>
                    <li className='p-2 m-2'>{loggedIn}</li>
                </ul>


            </div>
        </div>
  )
}

export default Header