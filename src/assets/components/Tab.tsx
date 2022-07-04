import React from 'react'
import { useState } from 'react'

export default function Tab(props:any) {
    
    const[tabIndex, setTabIndex] = useState(0)

  return (
    <div className="container-tab">
        <div className='tab'>
        <a className={` ${tabIndex === 0 ? 'tab__link-active' : 'tab__link'} `}
            onClick={ () => { setTabIndex(0) } }
            href="#">{props.left_title}
        </a>

        <a className={` ${tabIndex === 1 ? 'tab__link-active' : 'tab__link'} `}
            onClick={ () => { setTabIndex(1) } }
            href="#">{props.right_title}
        </a>
    </div>
    </div>
  )
}