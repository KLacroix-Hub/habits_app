import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { useState } from 'react'

//ROUTE && BUTTON
import MenuButton from './MenuButton'
import Home from '../../pages/Home'
import Notifications from '../../pages/Notifications'
import Upload from '../../pages/Upload'
import Profile from '../../pages/Profile'

//BASE ICON
import HomeIcon from '/menu-icon/home.svg'
import UploadIcon from '/menu-icon/Upload.svg'
import NotificationIcon from '/menu-icon/Notification.svg'
import ProfileIcon from '/menu-icon/Profile.svg'

//ACTIVE ICON
import ActiveHomeIcon from '/menu-icon/home-active.svg'
import ActiveUploadIcon from '/menu-icon/Upload-active.svg'
import ActiveNotificationIcon from '/menu-icon/Notification-active.svg'
import ActiveProfileIcon from '/menu-icon/Profile-active.svg'


export default function Menu() {

  return (
    <BrowserRouter>
    <nav className="menu-container">
        <MenuButton
        imgGrey={HomeIcon}
        imgActive = {ActiveHomeIcon}
        menu_title="Home"
        page_link="/"
        />
        <MenuButton 
        imgGrey={UploadIcon}
        imgActive={ActiveUploadIcon}
        menu_title="Upload"
        page_link="/upload"
        />
        <MenuButton
        imgGrey={NotificationIcon}
        imgActive={ActiveNotificationIcon}
        menu_title="Notification"
        page_link="/notification"
        />
        <MenuButton 
        imgGrey={ProfileIcon}
        imgActive={ActiveProfileIcon}
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