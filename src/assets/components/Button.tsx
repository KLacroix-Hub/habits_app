import React from 'react'

export default function Button(props:any) {
  return (
    <a 
        href={props.LinkTo}
        className={`button button-${props.btn_etat} button-${props.btn_etat}-${props.icon == 'true' ? 'icon' : ''} title title-sm`}>
        {props.content}
    </a>
  )
}
