import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuButton(props:any) {

    return (
        <NavLink 
            to={props.page_link} 
            className={({ isActive }) =>
            isActive ? 'menu-container__link menu-container__link-active' : 'menu-container__link'}
        >
            <p className="body body-xs">
                {props.menu_title}
            </p>
        </NavLink>
    )
}