import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import MenuButton from './MenuButton'
import Home from '../../pages/Home'
import Notifications from '../../pages/Notifications'
import Upload from '../../pages/Upload'
import Profile from '../../pages/Profile'

import HomeIcon from '/menu-icon/home.svg'
import UploadIcon from '/menu-icon/Upload.svg'
import NotificationIcon from '/menu-icon/Notification.svg'
import ProfileIcon from '/menu-icon/Profile.svg'

function Menu() {
  return (
    <BrowserRouter>
    <nav className="menu-container">
        <MenuButton
        icon_menu={HomeIcon}
        menu_title="Home"
        page_link="/"
        />
        <MenuButton 
        icon_menu={UploadIcon}
        menu_title="Upload"
        page_link="/upload"
        />
        <MenuButton
        icon_menu={NotificationIcon}
        menu_title="Notification"
        page_link="/notification"
        />
        <MenuButton 
        icon_menu={ProfileIcon}
        menu_title="Profile"
        page_link="/profile"
        />
    </nav>

    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/notification" element={<Notifications />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default Menu