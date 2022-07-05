import React from 'react'
import { Link } from 'react-router-dom'

function MenuButton(props:any) {
    return (
        <Link to={props.page_link} className='menu-container__link'>
            <img src={props.icon_menu} alt={props.icon_menu} />
            <p className="body body-xs">{props.menu_title}</p>
        </Link>
    )
}

export default MenuButton