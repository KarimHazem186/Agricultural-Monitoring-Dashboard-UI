import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { IoHomeSharp, IoLogOutSharp, IoSettings } from 'react-icons/io5'
import { MdOutlineRoundaboutLeft, MdSecurity } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <IoHomeSharp />
    },
    // {
    //   path: "/",
    //   name: "Account",
    //   icon: <FaCircleUser />
    // },
    {
      path: "/about",
      name: "About",
      icon: <MdOutlineRoundaboutLeft />
    },
    {
      path: "/security",
      name: "Security",
      icon: <MdSecurity />
    },
    {
      path: "/setting",
      name: "Setting",
      icon: <IoSettings />
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <IoLogOutSharp />
    },
  ]

  return (
    <div className='container vh-100'>
      <div style={{ width: isOpen ? "250px" : "60px" }} className='sidebar'>
        <div className='top-section'>
          <h1 style={{ display: isOpen ? "block" : "none" }} className='logo'>Logo</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className='bars'>
            <FaBars onClick={toggle} aria-label="Toggle sidebar" />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) => isActive ? 'link active' : 'link'}
            >
              <div className='icon'>{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className='link-text'>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
