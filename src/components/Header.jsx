
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {

    const onlineStatus=useOnlineStatus()

    const [btnname, setBtnname] = useState('LogIn')
  return (
    <div className="header">
            <div className="logo-container">
                <img className="logo"  alt="app-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Online Status {onlineStatus ? '✅':'🔴'}</li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{
                     btnname==='LogIn' ?   
                     setBtnname('LogOut')
                     :
                     setBtnname('LogIn')
                    }}>{btnname}</button>
                </ul>


            </div>
        </div>
  )
}

export default Header